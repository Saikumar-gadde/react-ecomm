import React from 'react';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';


import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';

import ProductInfo from './Components/ShowProductInfo/ProductInfo';




const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/single-product/:id' element={<ProductInfo />} />
        <Route path='*' element={<h1>Oops..!! Page not found..!!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;