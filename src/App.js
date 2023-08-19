import React, { useEffect, useState } from 'react'
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
import BlogsPages from './pages/blogGridView/index';
import PricingPages from './pages/PricingPlanning';
import ProjectDetail from "./pages/projectDetails/index"
import Loader from "./Common/Loader"
const App = () => {
  const [isLoading, setIsLoading] = useState(false); // Set initial state to false

  useEffect(() => {
    // Start loading process after component is mounted
    setIsLoading(true);

    // Simulate loading delay (remove this in production)
    setTimeout(() => {
      // Replace this with your logic to load data
      // For example, fetch data from an API and update the state
      // Example: fetchDataAndSetData();

      // After loading data, set isLoading to false
      setIsLoading(false);
    }, 3000); // Simulated loading time in milliseconds
  }, []);

  return (
    <>
      {isLoading ? <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Loader />
        </div>
      </> : <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePageRoutes />} />
          <Route path='/about' element={<AboutPages />} />
          <Route path='/contactus' element={<ConactUsPages />} />
          <Route path='/faqs' element={<FaqsPages />} />
          <Route path='/services' element={<ServicesPages />} />
          <Route path='/blogs' element={<BlogsPages />} />
          <Route path='/pricing' element={<PricingPages />} />
          <Route path='/project-details-page' element={<ProjectDetail />} />

        </Routes>
        <Foooter /></>}

    </>

  )
}

export default App