import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import Soluciones from './components/Soluciones';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Review from './components/Review';
import FormReviews from './components/FormReviews';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/solutions" element={<Soluciones/>}/>
        <Route path="/us" element={<Nosotros/>}/>
        <Route path="/contact" element={<Contacto/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/formreview" element={<FormReviews/>}/>
      </Routes>
    </>
  )
}

export default App
