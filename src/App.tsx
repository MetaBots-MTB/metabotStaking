import Header from 'Components/Header'
import StakeInfo from 'Components/StakeInfo'
import Footer from 'Components/Footer'
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
