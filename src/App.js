import logo from './logo.svg';
import './App.css';
import Accessories from './car_accessories';
import Inspection from './Inspection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarAccessories from './car_accessories';
import CarSale from './CarSale';
import Footer from './Footer';
import Header from './Header';
import LoginForm from './Login';
import SignupForm from './Signup';
import UserProfile from './UserProfile';
import Reviews from './Review';
import UploadCar from './UploadCar';
import CarList from './CarList';

function App() {

  return (
    <>
     <Router>
      <div>
        {/* Navigation links */}
        {/* <nav>
          <ul>
            <li><Link to="/">Car Accessories</Link></li>
            <li><Link to="/Inspect">Inspection</Link></li>
            <li><Link to="/CarSale">Car Sale</Link></li>
          </ul>
        </nav> */}
        <Header/>

        {/* Routes definition */}
        <Routes>
         <Route path="/" element={<><Accessories/>
          <CarSale name="BMW X1" price="32 lacs" city="Lahore" specs="2020 | petrol | 1300cc | 23000 km" info="Updated 15 min ago"/> <Inspection/></>}/>
          <Route path="/Accesories" element={<CarAccessories />} />
          <Route path="/Inspect" element={<Inspection />} />
          <Route path="/CarSale" element={<CarList/>} />
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="Signup" element={<SignupForm/>}/>
          <Route path="/UserInfo" element={<UserProfile/>}/>  
          <Route path="/Review" element={<Reviews/>}/>
          <Route path="/UploadCar" element={<UploadCar/>}/>

        </Routes>
      </div>
    </Router>
    {/* <Footer/> */}
    </>
   
  );
}

export default App;
