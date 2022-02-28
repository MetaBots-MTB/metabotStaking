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
    const { token, approve, approving, approvedAmount } = useTokenApproval()

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
    const valid = useMemo(() => isEmpty(amountError) && approvedAmount.gte(toBigNumber(amount)) && !isNil(index), [index,amountError, approvedAmount, amount])
    const approveValid = useMemo(() => isEmpty(amountError) && amount && !isNil(index), [index,amountError, amount])
    console.log('asdfa',approveValid)
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount) create(amount, index)
    }
    return (
        <div className="stake-info-sec">
            <Loader loading={loading} />
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
                        <a href='#'><span>?</span> Read our term & conditions before proceeding</a>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                </div>
                {isApproved ? <button className='button' disabled={!valid} onClick={onSubmit}>
                    Stake
                </button> :
                    <button className='button' disabled={!approveValid} onClick={onAprrove}>Approve</button>
                }

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

