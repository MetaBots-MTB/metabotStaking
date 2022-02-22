import { useState } from 'react';
import logo from 'img/metabot-logo.png';
import ConnectWallet from './ConnectWallet'
import { Toaster } from 'react-hot-toast';
import { useActiveWeb3React } from 'hooks/web3';


function Header() {
  const { account } = useActiveWeb3React()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header">
      <img className='logo' src={logo} alt='' />
      {account ? <div className='button'>{account}</div> : <>
        <button onClick={() => setIsOpen(true)} className='button'>
          Connect to a wallet
        </button>
        <ConnectWallet open={isOpen} setIsOpen={setIsOpen} />
      </>}
    </div>
  );
}

export default Header;
