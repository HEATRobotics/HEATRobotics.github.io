import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/navbar.js';
import HelloWorld from './pages/Main/Main.js';

const AppRouter = () => {
  return (
    <Router>
      <NavbarComponent />
    </Router>
  );
};

export default AppRouter;
