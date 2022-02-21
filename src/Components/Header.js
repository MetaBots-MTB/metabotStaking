import { useState } from 'react';
import logo from '../img/metabot-logo.png';
import ConnectWallet from './ConnectWallet'


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    
        <div className="header">
      <img className='logo' src={logo} alt='' />
     
      <button onClick={() => setIsOpen(true)} className='button'>
          Connect to a wallet
      </button>
      <ConnectWallet open={isOpen} onClose={() => setIsOpen(false)} />

      </div>
   
  );
}

export default Header;
