import logo from '../img/metabot-logo.png';


function StakeCard(props) {
  return (
      <div className="stake-card">
      
        <img src={logo} />
        <h2>{props.title}</h2>
        <ul>
            <li>
                <span>Staked Amount</span>
                <span>{props.stakeamount} $Metabot</span>
            </li>
            <li>
                <span>Stake Duration</span>
                <span>{props.duration} Year</span>
            </li>
            <li>
                <span>Withdraw TimeFrame</span>
                <span>{props.timeframe}</span>
            </li>
            <li>
                <span>Apy</span>
                <span>{props.apy}%</span>
            </li>
            <li>
                <span>Reward Amount</span>
                <span>{props.rewardamount}</span>
            </li>
        </ul>
        <ul>
            <li>
                <span>{props.livewithdraw} Metabot</span>
                <span>{props.livereward} Metabot</span>
            </li>
            <li>
                <button className='button'>Withdraw</button>
                <button className='button'>Get Reward</button>
            </li>
        
        </ul>

      </div>
  );
}

export default StakeCard;
