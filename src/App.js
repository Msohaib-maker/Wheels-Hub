import logo from './logo.svg';
import './App.css';
import Accessories from './car_accessories';
import Inspection from './Inspection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarAccessories from './car_accessories';
import CarSale from './CarSale';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Footer from './Footer';
import Header from './Header';
import LoginForm from './Login';
import SignupForm from './Signup';
import UserProfile from './UserProfile';
import Reviews from './Review';

function App() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCTFdsNOf74GwPSYQTDPcaWshSkVVtp9h8",
  //   authDomain: "atyourdoorstep-a5c85.firebaseapp.com",
  //   databaseURL: "https://atyourdoorstep-a5c85-default-rtdb.firebaseio.com",
  //   projectId: "atyourdoorstep-a5c85",
  //   storageBucket: "atyourdoorstep-a5c85.appspot.com",
  //   messagingSenderId: "30450144760",
  //   appId: "1:30450144760:web:066963a22f44d22289320d",
  //   measurementId: "G-T1GNYCQN4R"
  // };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

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
         <Route path="/" element={<><Accessories/> <CarSale name="BMW X1" price="32 lacs" city="Lahore" specs="2020 | petrol | 1300cc | 23000 km" info="Updated 15 min ago"/> <Inspection/></>}/>
          <Route path="/Accesories" element={<CarAccessories />} />
          <Route path="/Inspect" element={<Inspection />} />
          <Route path="/CarSale" element={<CarSale name="BMW X1" price="32 lacs" city="Lahore" specs="2020 | petrol | 1300cc | 23000 km" info="Updated 15 min ago"/>} />
          <Route path="/Login" element={<LoginForm/>}/>
          <Route path="Signup" element={<SignupForm/>}/>
          <Route path="/UserInfo" element={<UserProfile/>}/>  
          <Route path="/Review" element={<Reviews/>}/>
        </Routes>
      </div>
    </Router>
    {/* <Footer/> */}
    </>
   
  );
}

export default App;
