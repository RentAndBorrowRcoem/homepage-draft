import './App.css';
// import Footer from './layouts/Footer';
import Navbar from '../src/layouts/Navbar';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "../src/layouts/Navbar";
import FirstPage from './layouts/HomePage';
import SecondPage from './layouts/Categories';
import PromoAds from './layouts/PromoAds';
import HowItWorks from './components/HowItWorks';
import Footer from './layouts/Footer';
import PromoAdsWrapper from './layouts/PromoAdsWrapper';
import HomePage from './layouts/HomePage';
import Categories from './layouts/Categories';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <HomePage/>
      </div>
      <div>
        <Categories/>
      </div>
      <div>
        <PromoAds />
        <PromoAdsWrapper/>
      </div>
      <div>
        <HowItWorks/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
    
  );
}

export default App;
