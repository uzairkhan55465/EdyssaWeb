import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechnologyFeature from './pages/Technology/TechnologyFeature'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AboutMain from './pages/Technology/AboutMain/AboutMain';
import Clients from './pages/AboutourCompany/AboutCompany';
import 'aos/dist/aos.css';
import MissionVision from './pages/MissionandVision/MissionVision';
import PopularServices from './pages/popularServices';
import Projects from './pages/projects';
import CompanyStatistics from './pages/companyStatistics';
import Support from './pages/supportandFeatures';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import Foooter from './Components/Header/Footer';
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs';
import { Container } from 'react-bootstrap';
import PricingPlan from './pages/pricingPlan';
import ClientsFeedback from './pages/clientsFeedback';
import ConactUsPages from './pages/ContactUs';
import AboutPages from './pages/About';
import HomePageRoutes from './HomePageRoutes';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePageRoutes />} />
        <Route path='/about' element={<AboutPages />} />
        <Route path='/contactus' element={<ConactUsPages />} />
      </Routes>
      <Foooter />
    </>

  )
}

export default App