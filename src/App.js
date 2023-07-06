import React from 'react'
import TechnologyFeature from './pages/Technology/TechnologyFeature'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AboutMain from './pages/Technology/AboutMain/AboutMain';
import Clients from './pages/AboutourCompany/AboutCompany';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MissionVision from './pages/MissionandVision/MissionVision';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import Foooter from './Components/Header/Footer';
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs';
import { Container } from 'react-bootstrap';
import RoadMap from './pages/RoadMap/RoadMap';
const App = () => {
  return (
    <div>
      <Header />
      <AboutMain />
      <Container>
        <Clients />
        <TechnologyFeature />
        <MissionVision />
        <TeamMembers />
        <WhyChooseUs />
        <RoadMap />
      </Container>
      <Foooter />
    </div>
  )
}

export default App