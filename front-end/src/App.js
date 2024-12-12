import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/home/home'; 
import LoginComponent from './componentes/login/LoginComponent'; 
import RegisterComponent from './componentes/login/RegistrerComponent'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </Router>
  );
}

export default App;