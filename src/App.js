//import logo from './logo.svg';
import './App.css';
//import Accessories from './Components/Accessories/car_accessories';
import Inspection from './Components//Inspection/Inspection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarAccessories from './Components/Accessories/car_accessories';
//import CarSale from './CarSale';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginForm from './Components/Auth/Login';
import SignupForm from './Components/Auth/Signup';
import UserProfile from './Components/User/UserProfile';
import Reviews from './Components/Review/Review';
import UploadCar from './Components/Car/Upload/UploadCar';
import CarList from './Components/Car/CarList';
import MainPage from './Components/Starter/MainPage';
import FilteredCar from './Components/Car/Filtered Car/FilteredCar';
import UsedCar from './Components/Car/Filtered Car/UsedCar';
import NewCar from './Components/Car/Filtered Car/NewCar';
import AddReview from './Components/Review/AddReview';
import InspectionList from './Components/Inspection/userinspections';

function App() {

  return (
    <>
     <Router>
      <div className='cuto'>
        {/* Navigation links */}
        {/* <nav>
          <ul>
            <li><Link to="/">Car Accessories</Link></li>
            <li><Link to="/Inspect">Inspection</Link></li>
            <li><Link to="/CarSale">Car Sale</Link></li>
          </ul>
        </nav> */}
        <Header/>
<br></br>
        {/* Routes definition */}
        <Routes>
         <Route path="/" element={<MainPage/>}/>
          <Route path="/Accesories" element={<CarAccessories />} />
          <Route path="/Inspect" element={<Inspection />} />
          <Route path="/CarSale" element={<CarList/>} />
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="Signup" element={<SignupForm/>}/>
          <Route path="/UserInfo" element={<UserProfile/>}/>  
          <Route path="/Review" element={<Reviews/>}/>
          <Route path="/UploadCar" element={<UploadCar/>}/>
          <Route path="/FilteredCar" element={<FilteredCar/>}/>
          <Route path="/UsedCar" element={<UsedCar/>}/>
          <Route path="/NewCar" element={<NewCar/>}/>
          <Route path="/AddReview" element={<AddReview/>}/>
          <Route path="/InspectionList" element={<InspectionList/>}/>

        </Routes>
      </div>
    </Router>
    <Footer/>
    
    </>
   
  );
}

export default App;
