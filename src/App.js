import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerLogin from './pages/Farmer/FarmerLogin';
import FarmerSignup from './pages/Farmer/FarmerSignup';
import FarmersProfile from './pages/Farmer/FarmersProfile';
import MyCrops from './pages/Farmer/MyCrops';
import MySells from './pages/Farmer/MySales';
import MyRecords from './pages/Farmer/MyRecords';
import FarmProduceSales from './pages/FarmProduceSales';
import MyFarmingHistory from './pages/Farmer/MyFarmingHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/farmerlogin' element={ <FarmerLogin /> } />
          <Route path='/farmersignup' element={ <FarmerSignup /> } />
          <Route path='/farmersprofile' element={ <FarmersProfile /> } />
          <Route path='/mycrops' element={ <MyCrops /> } />
          <Route path='/mysales' element={ <MySells /> } />
          <Route path='/myrecords' element={ <MyRecords /> } />
          <Route path='/farmproduce' element={ <FarmProduceSales /> } />
          <Route path='/farminghistory' element={ <MyFarmingHistory /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
