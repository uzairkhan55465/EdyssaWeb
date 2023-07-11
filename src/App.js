import React from 'react'
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
const App = () => {
  return (
    <div>
      <Header />
      <AboutMain /> 
      <Clients /> 
       <TechnologyFeature />
      <MissionVision />
      <PopularServices />
      <Projects />
      <CompanyStatistics />
      <WhyChooseUs />
      <Support />
      <TeamMembers />
      <PricingPlan />
      <ClientsFeedback />
      <Foooter />
    </div>
  )
}

export default App