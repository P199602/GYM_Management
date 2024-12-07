import './App.css';
import { BrowserRouter as Router  ,Route,Routes} from 'react-router-dom';
import NavBar from './Component/NavBar';
import Welcome from './Component/Welcome';
import About from './Component/About';
import Services from './Component/Services';
import Products from './Component/Products';
import Contact from './Component/Contact';
import Footer from "./Component/FooterGym";
import Bmi from './Component/Bmi';
import RegisterComponent from './Component/Registration';
import LoginComponent from './Component/Login';
import Payment from './Component/Payment';

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      {/* Main page route displaying all components */}
      <Route path="/" element={
        <>
         <>
            <Welcome id="welcome" />
            <About id="about" />
            <Bmi id="bmi" />
            <Services id="services" />
            <Products id="products" />
            <Contact id="contact" />
          </>
        </>
      } />
      {/* Separate route for signup page */}
      <Route path="/signup" element={<RegisterComponent/>} />
      <Route path="/login" element={<LoginComponent/>} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
