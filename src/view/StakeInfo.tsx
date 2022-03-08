// import left from '../img/prev.png';
import logo from 'img/metabot-logo.png';
import StakeCard from 'view/StakeCard'
import Dropdown from "./Dropdown";
import { useStaking } from 'callbacks/MetaBotStaking';
import { isEmpty, isNil, toFinite } from 'lodash';
import { useMemo, useState } from 'react';
import { validateSingle } from 'utils/validate';
import Loader from 'Components/Loader';
import { istake } from 'callbacks/types';
import { formatBN } from 'utils/formatters';
import { useTokenApproval } from 'hooks/useApproval';
import { toBigNumber } from 'utils/converters';
import { BigNumber } from 'ethers';


function StakeInfo() {

    const { loading, locks, create, stakes, earn, withDraw, reward } = useStaking()
    const { token, isLoadingToken, approve, approving, approvedAmount } = useTokenApproval()

    const [amount, setAmount] = useState<any>(0)
    const [index, setIndex] = useState<number>()

    const [amountError, setAmountError] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if (value && toFinite(value) < 50000) {
            setAmountError("amount should be greater than 50000")
        } else {
            const { value: amount, error } = validateSingle(value, 'BigNumber');
            if (error) {
                setAmountError(error)
            } else {
                setAmountError(null)
                setAmount(amount)
            }
        }
    }
    const isApproved = useMemo(
        () => approvedAmount && approvedAmount.gt(BigNumber.from(0)) && approvedAmount.gte(toBigNumber(amount)),
        [amount, approvedAmount],
    )
    const onAprrove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount > 0 && !approving) approve(toBigNumber(amount))
    }
    const valid = useMemo(() => isEmpty(amountError) && approvedAmount.gte(toBigNumber(amount)) && !isNil(index), [index, amountError, approvedAmount, amount])
    const approveValid = useMemo(() => isEmpty(amountError) && amount && !isNil(index), [index, amountError, amount])
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount) create(amount, index)
    }
    const isloading = loading || isLoadingToken || approving
    return (
        <div className="stake-info-sec">
            <Loader loading={isloading} />


            <div className='row'>
                <div className='col-lg-6'>
                    <div className='stake-info'>
                        <div className='stake-info-top'>
                            <h2>Stake</h2>
                        </div>
                        <div className='stake-info-middle'>
                            <p>
                                <span>Input</span>
                                <span>Balance: {!isEmpty(token) ? parseFloat(formatBN(token.accountBalance)).toFixed(5) : 0}</span>

                                <form className='stake-amount-input'>
                                    <input
                                        className='input-coin-amount'
                                        placeholder='0.0'
                                        type="number"
                                        onChange={onChange}
                                        required />
                                    {amountError ? <div className='input-error' style={{ color: 'red' }}>{amountError}</div> : null}
                                </form>
                                <span> <img src={logo} alt='' width='25px' /> MTB</span>
                            </p>
                            <p>
                                <form className='stake-apy-form'>
                                    <Dropdown options={locks} setIndex={setIndex} />
                                </form>
                                <br /><br />
                                <a href='' onClick={(e)=>e.preventDefault()}><span>?</span> Read our term & conditions before proceeding</a>
                            </p>
                        </div>
                        {isApproved ? <button className='button' disabled={!valid} onClick={onSubmit}>
                            Stake
                        </button> :
                            <button className='button' disabled={!approveValid} onClick={onAprrove}>Approve</button>
                        }
                    </div>

                </div>
                

                <div className='col-lg-6 d-lg-flex flex-lg-column mt-5 mt-lg-1 mb-lg-1 justify-content-lg-between'>
                    <div className='mb-3 mb-lg-0'>
                        <p className='text-white mb-2'>Tier 1 Staking : 6% APY - 3 months lockup</p>
                        <p className='text-white mb-0'>Tier 2 Staking : 15% APY - 12 months lockup</p>
                    </div>
                    <div className='mb-3 mb-lg-0'>
                        <p className='h3' style={{color:'#4048a1'}}>PRELAUNCH STAKING AVAILABLE!</p>
                        <p className='text-color mb-3'>
                            Every wallet that stakes 333,000 tokens BEFORE launch receives 1 free NFT. (full complete robot)<br />
                            This can take place up to 6 times (a maximum of 6 NFT's) and only counts for stakes with a lockup of 12 months.
                        </p>
                        <p className='mb-0 text-color'>e.g.: A wallet with 1,998,000 staked tokens with a 12 months lockup would receive 6 NFTs.</p>
                    </div>
                    <div className='mb-3 mb-lg-0'>
                        <p className='text-color mb-3'>
                            After launch, every wallet needs to stake a minimum of 666,000 tokens to get 1 free NFT.<br />
                            Prerequisites are the same: Maximum 6 NFT's and counts only for stakes with a lockup of 12 months.
                        </p>
                        <p className='mb-0 text-color'>e.g.: A wallet with 3,996,000 staked tokens with a 12 months lockup would receive 6 NFTs.</p>
                    </div>
                    <div className='mb-3 mb-lg-0'>
                        <p className='text-color mb-0'>Prelaunch stakers will receive their NFTs early with the game launch, while post launch stakers will receive at the end of lock period.</p>
                    </div>
                </div>

            </div>


            <div className='stake-card-holder'>
                {!stakes.length && isEmpty(earn) ? null :
                    stakes.map((stake: istake, ind: number) => <StakeCard stake={stake} earn={earn} withDraw={withDraw} reward={reward} key={ind} index={ind} />)
                }
            </div>

        </div>
    );
}

export default StakeInfo;

