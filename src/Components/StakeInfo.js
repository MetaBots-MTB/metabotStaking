import left from '../img/prev.png';
import logo from '../img/metabot-logo.png';
import StakeCard from './StakeCard'

import Dropdown from "./Dropdown";
import { useState } from "react";


export default function StakeInfo() {
    const [selected, setSelected] = useState("Year");
  return (

      
    <div className="stake-info-sec">
      
    <div className='stake-info'>
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
                <input className='input-coin-amount' placeholder='0.0' type="number" required />
             </form>
        <span> <img src={logo} width='25px' /> Metabot.</span>
        </p>
        <p>
        
            <form>
                <input placeholder='1' type="number" required />
                

                <Dropdown selected={selected} setSelected={setSelected} />


             </form>
             <br/><br/>
            <a href='#'><span>?</span> Read our term & conditions before proceeding</a>
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
        </p>
        </div>

        <button className='button'>
        Stake
    </button>
        </div>
        <div className='stake-card-holder'>
    <StakeCard 
    title='Stake 1'
    stakeamount='200000000'
    duration='1'
    timeframe='24 july, 2023 17:11:12 GMT+5'
    apy='15'
    rewardamount='3000000'
    livewithdraw='1,0000'
    livereward='0,66000'
    />
    <StakeCard 
    title='Stake 2'
    stakeamount='200000000'
    duration='1'
    timeframe='24 july, 2023 17:11:12 GMT+5'
    apy='15'
    rewardamount='3000000'
    livewithdraw='1,0000'
    livereward='0,66000'
    />
    <StakeCard 
    title='Stake 3'
    stakeamount='200000000'
    duration='1'
    timeframe='24 july, 2023 17:11:12 GMT+5'
    apy='15'
    rewardamount='3000000'
    livewithdraw='1,0000'
    livereward='0,66000'
    />
    </div>

  </div>
  );
}

