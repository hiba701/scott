import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Form from './Pages/Form/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Product from './Pages/Product/Product';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    //routers
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
