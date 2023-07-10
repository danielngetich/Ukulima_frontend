import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerLogin from './pages/Farmer/FarmerLogin';
import FarmerSignup from './pages/Farmer/FarmerSignup';
import FarmersProfile from './pages/Farmer/FarmersProfile';
import MyCrops from './pages/Farmer/MyCrops';
import AddProducts from './pages/Farmer/AddProducts';
import MyRecords from './pages/Farmer/MyRecords';
import FarmProduceSales from './pages/FarmProduceSales';
import MyFarmingHistory from './pages/Farmer/MyFarmingHistory';
import UseFetch from './components/UseFetch';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  const {data: products, loading, error} = UseFetch("https://dummyjson.com/products")
  // const products = items.products
  // console.log(products)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={ <Shop products={products} eroor={error} loading={loading} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/farmerlogin' element={ <FarmerLogin /> } />
            <Route path='/farmersignup' element={ <FarmerSignup /> } />
            <Route path='/farmersprofile' element={ <FarmersProfile /> } />
            <Route path='/mycrops' element={ <MyCrops /> } />
            <Route path='/addproducts' element={ <AddProducts /> } />
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
