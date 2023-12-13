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
import MainPage from './MainPage';
import FilteredCar from './FilteredCar';
import UsedCar from './UsedCar';
import NewCar from './NewCar';
import AddReview from './AddReview';
import InspectionList from './userinspections';

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
    <br/><br/>
    <Footer/>
    </>
   
  );
}

export default App;
