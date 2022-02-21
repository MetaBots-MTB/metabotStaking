import React from 'react'
import ReactDOM from 'react-dom';
import metamask from '../img/svg/metamask.svg'
import trustwallet from '../img/svg/trustwallet.svg'
import mathwallet from '../img/svg/mathwallet.svg'
import walletconnect from '../img/svg/walletconnect.svg'
import tokenpocket from '../img/svg/tokenpocket.svg'
import binancechain from '../img/svg/binancechain.svg'
import close from '../img/svg/close.svg'


export default function ConnectWallet({open,children,onClose}){
  if (!open) return null

  return ReactDOM.createPortal(
    
        <div className='connect-wallet-outer'>
        <div className='connect-wallet'>
     
      <button onClick={onClose}>
          <img onClick={onClose} src={close}/>
      </button>
      
      <h2>Connect to a wallet</h2>
      <ul>
        <li><a href='#'>Metamask <img src={metamask}/> </a></li>
        <li><a href='#'>TrustWallet <img src={trustwallet}/> </a></li>
        <li><a href='#'>MathWallet <img src={mathwallet}/> </a></li>
        <li><a href='#'>Tokenpocket <img src={tokenpocket}/> </a></li>
        <li><a href='#'>Walletconnect <img src={walletconnect}/> </a></li>
        <li><a href='#'>Binance Chain Wallet <img src={binancechain}/> </a></li>
      </ul>
      <a className='learn-how' href='#'> <span>?</span> Learn how to connect</a>


      </div>,
      </div>,
      document.getElementById('portal')
  );
}

