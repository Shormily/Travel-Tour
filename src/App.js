import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Ticket from './Pages/Home/Ticket/Ticket';
import Home from './Pages/Home/Home';
import { Route ,Routes} from 'react-router-dom';
import Navbars from './Pages/Home/Navbars/Navbars';
import Login from './Pages/Home/Login/Login';
import SignUp from './Pages/Home/SignUp/SignUp';

function App() {
  return (
    <>
    
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/ticket" element={<Ticket />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
