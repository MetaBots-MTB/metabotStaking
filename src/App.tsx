import Header from 'view/Header'
import StakeInfo from 'view/StakeInfo'
import Footer from 'view/Footer'
import Web3ReactManager from 'Components/Web3ReactManager';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Web3ReactManager>
      <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <StakeInfo />
        <Footer />
      </div>
     </Web3ReactManager>
  );
}

export default App;
