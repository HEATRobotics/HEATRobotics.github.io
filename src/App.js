import React from 'react';
import AppRouter from './AppRouter';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import HomePage from "./pages/Main/Main";
import Contact from "./pages/Contact/Contact";
import OurTeam from "./pages/OurTeam/OurTeam";
import Sponsors from "./pages/Sponsors/Sponsors";
import Navbar from "./components/NavBar/navbar";
import './styles/general.css'
import Footer from "./components/Footer/footer";

const App = () => {
  return (
      <Router>
          <Navbar/>
          <div>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/team" element={<OurTeam/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/sponsors" element={<Sponsors/>}/>
              </Routes>
          </div>
          <Footer/>
      </Router>
  );
};

export default App;
