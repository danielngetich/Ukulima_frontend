import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerLogin from './pages/Farmer/FarmerLogin';
import FarmerSignup from './pages/Farmer/FarmerSignup';
import FarmersProfile from './pages/Farmer/FarmersProfile';
import MyCrops from './pages/Farmer/MyCrops';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
