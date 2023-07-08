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
import { Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaar from './Components/Navbaar';
import Bloglistview from './Components/Bloglistview';
import Mainpage from './pages/Mainpage';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Mainpage/>}>
        <Route path = 'faq' element = {<Bloglistview heading = "Faq & Help" link = "Faq & Help" fontSize="50px" fontWeight= "500"/> }/>     
        <Route path = 'price' element = {<Bloglistview heading = "Price List" link = "Price List" fontSize="50px" fontWeight= "500"/> }/>     
        <Route path = 'blog' element = {<Bloglistview heading = "Blog List View" link = "Blog List View" fontSize="50px" fontWeight= "500"/> }/>     
       
        
        
        
        
        </Route>
        
      </Routes>
     {/* <Header /> */}
       {/* <Mainpage/> */}
      {/* <AboutMain />
      <Container>
        <Clients />
        <TechnologyFeature />
        <MissionVision />
        <TeamMembers />
        <WhyChooseUs />
      </Container>

      <Foooter /> */}
    </>
  
  )
}

export default App