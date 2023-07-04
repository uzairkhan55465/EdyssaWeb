import React from 'react'
import TechnologyFeature from './pages/Technology/TechnologyFeature'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AboutMain from './pages/Technology/AboutMain/AboutMain';
import Clients from './pages/AboutourCompany/AboutCompany';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MissionVision from './pages/MissionandVision/MissionVision';
import PopularServices from './pages/PopularServices/PopularServices';
const App = () => {
  return (
    <div>
      <Header />
      <AboutMain />
      <Clients />
      <TechnologyFeature />
      <MissionVision />
      <PopularServices/>
    </div>
  )
}

export default App