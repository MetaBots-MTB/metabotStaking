// import left from '../img/prev.png';
import logo from 'img/metabot-logo.png';
import StakeCard from 'view/StakeCard'
import Dropdown from "./Dropdown";
import { useStaking } from 'callbacks/MetaBotStaking';
import { isEmpty, toFinite } from 'lodash';
import { useMemo, useState } from 'react';
import { validateSingle } from 'utils/validate';
import Loader from 'Components/Loader';
import { istake } from 'callbacks/types';


function StakeInfo() {

    const {loading, locks, create, stakes, earn, withDraw, reward } = useStaking()

    const [amount, setAmount] = useState<any>()
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
    const valid = useMemo(() => isEmpty(amountError) && amount && (index + 1), [amountError, amount, index])
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount) create(amount, index)
    }
    return (
        <div className="stake-info-sec">
            <div className='stake-info'>
                <Loader loading={loading}/>
                <div className='stake-info-top'>
                    <h2>Stake</h2>
                    <button className='help-btn'>
                        ?
                        <p className='help-info'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus.</p>
                    </button>
                </div>
                <div className='stake-info-middle'>
                    <p>
                        <span>Input</span>
                        <span>Balance: 0</span>
                        <form>
                            <input
                                className='input-coin-amount'
                                placeholder='0.0'
                                type="number"
                                onChange={onChange}
                                required />
                            {amountError ? <div style={{ color: 'red' }}>{amountError}</div> : null}
                        </form>
                        <span> <img src={logo} alt='' width='25px' /> Metabot.</span>
                    </p>
                    <p>
                        <form>
                            {!isEmpty(locks) ? <Dropdown options={locks} setIndex={setIndex} /> : null}
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
                <button className='button' disabled={!valid} onClick={onSubmit}>
                    Stake
                </button>
            </div>
            <div className='stake-card-holder'>
                {isEmpty(stakes) ? null :
                    stakes.map((stake:istake , ind: number) => <StakeCard stake={stake} earn={earn} withDraw={withDraw} reward={reward} key={ind} index={ind} />)
                }
            </div>
        </div>
    );
}

export default StakeInfo;

