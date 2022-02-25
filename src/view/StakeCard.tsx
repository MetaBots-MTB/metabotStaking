import logo from 'img/metabot-logo.png';
import { formatBN, formatDateTime, formatDuration } from 'utils/formatters';


function StakeCard({ stake, earn, withDraw, reward, index }) {

    return (
        <div className="stake-card">
            <img src={logo} />
            <h2>Stake {index + 1}</h2>
            <ul>
                <li>
                    <span>Staked Amount</span>
                    <span>{formatBN(stake.stake)} $Metabot</span>
                </li>
                <li>
                    <span>Stake Duration</span>
                    <span>{formatDuration((stake.unlock - stake.started))}</span>
                </li>
                <li>
                    <span>Withdraw TimeFrame</span>
                    <span>{formatDateTime((stake.unlock) * 1000)}</span>
                </li>
                <li>
                    <span>Apy</span>
                    <span>{stake.apy / 100}%</span>
                </li>
                <li>
                    <span>withdrawnRewards Amount</span>
                    <span>{formatBN(stake.withdrawnRewards)}</span>
                </li>
                <li>
                    <span>lastUpdated</span>
                    <span>{formatDateTime(stake.lastUpdated * 1000)}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>{stake.unlock > Date.now()/1000 && stake.active ? 0 : formatBN(stake.stake)} Metabot</span>
                    <span>{formatBN(earn[index])} Metabot</span>
                </li>
                <li>
                    <button className='button' onClick={() => withDraw(stake.stake, index)} >Withdraw</button>
                    <button className='button' onClick={() => reward(index)}>Get Reward</button>
                </li>

            </ul>

        </div>
    );
}

export default StakeCard;
