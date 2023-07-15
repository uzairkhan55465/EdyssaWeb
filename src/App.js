import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import 'aos/dist/aos.css';
import Foooter from './Components/Header/Footer';
import ConactUsPages from './pages/ContactUs';
import AboutPages from './pages/About';
import FaqsPages from './pages/Faqs';
import HomePageRoutes from './HomePageRoutes';
import ServicesPages from './pages/services';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePageRoutes />} />
        <Route path='/about' element={<AboutPages />} />
        <Route path='/contactus' element={<ConactUsPages />} />
        <Route path='/faqs' element={<FaqsPages />} />
        <Route path='/services' element={<ServicesPages />} />
      </Routes>
      <Foooter />
    </>

  )
}

export default App