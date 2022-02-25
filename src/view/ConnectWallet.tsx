import React from 'react'
import ReactDOM from 'react-dom';
import metamask from 'img/svg/metamask.svg'
import trustwallet from 'img/svg/trustwallet.svg'
import mathwallet from 'img/svg/mathwallet.svg'
import walletconnect from 'img/svg/walletconnect.svg'
import tokenpocket from 'img/svg/tokenpocket.svg'
import binancechain from 'img/svg/binancechain.svg'
import close from 'img/svg/close.svg'
import useAuth from 'hooks/useAuth';
import { connectorLocalStorageKey, ConnectorNames } from 'config/constants/wallets';
import { IConnectWallet } from 'callbacks/types';


function ConnectWallet({ open, setIsOpen }: IConnectWallet) {

  const { login } = useAuth()

  if (!open) return null
  
  return ReactDOM.createPortal(
    <div className='connect-wallet-outer'>
      <div className='connect-wallet'>
        <button onClick={() => setIsOpen(false)}>
          <img src={close} alt='' />
        </button>
        <h2>Connect to a wallet</h2>
        <ul>
          <li onClick={() => {
            login(ConnectorNames.Injected);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
            setIsOpen(false)
          }}
          >Metamask <img src={metamask} /></li>
          <li onClick={() => {
            login(ConnectorNames.Injected);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
            setIsOpen(false)
          }}>TrustWallet <img src={trustwallet} /></li>
          <li onClick={() => {
            login(ConnectorNames.Injected);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
            setIsOpen(false)
          }}>MathWallet <img src={mathwallet} /></li>
          <li onClick={() => {
            login(ConnectorNames.Injected);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
            setIsOpen(false)
          }}>Tokenpocket <img src={tokenpocket} /></li>
          <li onClick={() => {
            login(ConnectorNames.WalletConnect);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.WalletConnect);
            setIsOpen(false)
          }}>Walletconnect <img src={walletconnect} /></li>
          <li onClick={() => {
            login(ConnectorNames.Injected);
            window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
            setIsOpen(false)
          }}>Binance Chain Wallet <img src={binancechain} /></li>
        </ul>
        <a className='learn-how' target="_blank" href='https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain'> <span>?</span> Learn how to connect</a>
      </div>,
    </div>,
    document.getElementById('portal')
  );
}

export default ConnectWallet;

