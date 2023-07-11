import React, { useState } from 'react';
import Logo from "../../assets/images/logo-orange.webp"
import "./style.css"
import { AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {HiMailOpen} from 'react-icons/hi'
const Header = () => {
    const [menu1,setMenu1] =useState(false)
    const [menu2,setMenu2] =useState(false)
    const [menu3,setMenu3] =useState(false)
    const [menu4,setMenu4] =useState(false)

   const handleMouseEnter=(menunumber)=>{
    
switch (menunumber) {
    case 1:
        setMenu1(true);
        break;
        case 2:
            setMenu2(true);
        break;
        case 3:
            setMenu3(true);
        break;
        case 4:
            setMenu4(true);
        break;
        default:
            break;
}

   }

   const handleMouseLeave=(menunumber)=>{
    switch (menunumber) {
        case 1:
            setMenu1(false);
            break;
            case 2:
                setMenu2(false);
            break;
            case 3:
                setMenu3(false);
            break;
            case 4:
                setMenu4(false);
            break;
            default:
                break;
    }
    
       }

    return (
        <div id="header-sticky" class="tp-it-header__main p-relative">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-3">
                        <div class="logo">
                            <a href="index.html"><img src={Logo} alt="logo" /></a>
                        </div>
                    </div>
                    <div class="col-xl-6 d-none d-xl-block">
                        <ul className="menu d-flex justify-content-around">
                            
                            <li className="menu-item" onMouseLeave={()=>handleMouseLeave(1)} >
                                <a href="#" onMouseEnter={()=>handleMouseEnter(1)} >HOME</a>
                                {menu1===true ? ( <AiOutlineMinus style={{color:"red",fontWeight:"100"}}/>) : (   <AiOutlinePlus style={{color:"red",fontWeight:"100"}}/>)

                                }
                              
                                
                                 {
                                    menu1 && ( <div className="dropdowntwo dropdown_menu dropdown_menu--animated dropdown_menu-7" style={{ backgroundColor: '#070707' }}>
                                  <ul>
                                    <li><a href="index.html">Main Home</a></li>
                                    <li><a href="index-2.html">It Solutions</a></li>
                                    <li><a href="index-3.html">Digital Agency</a></li>
                                    <li><a href="index-4.html">Home Saas</a></li>
                                    <li><a href="index-5.html">Photography</a></li>
                                    <li><a href="index-6.html">Minimal Portfolio</a></li>
                                    <li><a href="index-7.html">Law Firm</a></li>
                                    <li><a href="index-8.html">Creative Agency</a></li>
                                    <li><a href="index-9.html">Architecture</a></li>
                                    <li><a href="index-10.html">Seo Agency</a></li>
                                 </ul>
                                    </div>)
                                 }
                               
                            </li>


                            <li className="menu-item">
                                <a href="#">ABOUT</a>
                                
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                                 
                                    sadasdasdas
                                </div> */}
                            </li>
                            <li className="menu-item" onMouseLeave={()=>handleMouseLeave(2)} >
                                <a href="#" onMouseEnter={()=>handleMouseEnter(2)} >SHOP</a>
                                {menu2===true ? ( <AiOutlineMinus style={{color:"red",fontWeight:"100"}}/>) : (   <AiOutlinePlus style={{color:"red",fontWeight:"100"}}/>)

}
                                 {
                                    menu2 && ( <div className="dropdowntwo dropdown_menu dropdown_menu--animated dropdown_menu-7" style={{ backgroundColor: '#070707' }}>
                                  <ul>
                                    <li><a href="index.html">Shop</a></li>
                                    <li><a href="index-2.html">Shop Details</a></li>
                                    <li><a href="index-3.html">Checkout Page</a></li>
                                    
                                 </ul>
                                    </div>)
                                 }
                               
                            </li>
                            <li className="menu-item" onMouseLeave={()=>handleMouseLeave(3)} >
                                <a href="#" onMouseEnter={()=>handleMouseEnter(3)} >PAGES</a>
                               
                                 {menu3===true ? ( <AiOutlineMinus style={{color:"red",fontWeight:"100"}}/>) : (   <AiOutlinePlus style={{color:"red",fontWeight:"100"}}/>)

}
                                 {
                                    menu3 && ( <ul class="mega-menu dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                    <li>
                                       <a className="mega-head" href="#" >Layout 1</a>
                                       <ul>
                                          <li><a href="about-me.html">About Me</a></li>
                                          <li><a href="about.html">About Us v.1 </a></li>
                                          <li><a href="about-2.html">About Us v.2</a></li>
                                          <li><a href="about-3.html">About Us v.3</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#" className='mega-head'>Layout 2</a>
                                       <ul>
                                          <li><a href="service.html">Service v.1</a></li>
                                          <li><a href="service-2.html">Service v.2</a></li>
                                          <li><a href="service-3.html">Service v.3</a></li>
                                          <li><a href="service-details.html">Service Details</a></li>
                                          <li><a href="faq.html">Faq Page</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#" className='mega-head'>Layout 3</a>
                                       <ul>
                                          <li><a href="portfolio.html">Portfolio v.1</a></li>
                                          <li><a href="portfolio-2.html">portfolio v.2</a></li>
                                          <li><a href="portfolio-3.html">portfolio v.3</a></li>
                                          <li><a href="portfolio-4.html">portfolio v.4</a></li>
                                          <li><a href="portfolio-5.html">portfolio v.5</a></li>
                                          <li><a href="portfolio-details.html">portfolio details</a></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#" className='mega-head'>Layout 4</a>
                                       <ul>
                                          <li><a href="team.html">Team</a></li>
                                          <li><a href="team-2.html">Team v.1</a></li>
                                          <li><a href="team-details.html">Team Details</a></li>
                                          <li><a href="job.html">Job</a></li>
                                          <li><a href="job-details.html">Job Details</a></li>

                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#" className='mega-head'>Layout 5</a>
                                       <ul>
                                          <li><a href="price.html">Price &amp; Plans</a></li>
                                          <li><a href="privacy-policy.html">privacy policy</a></li>
                                          <li><a href="terms.html">Terms &amp; Condition</a></li>
                                          <li><a href="help.html">Help Center</a></li>
                                         
                                       </ul>
                                    </li>
                                    <li>
                                       <a href="#" className='mega-head'>Layout 6</a>
                                       <ul>
                                          <li><a href="search.html">Search Results</a></li>
                                          <li><a href="contact.html">Contact</a></li>
                                          <li><a href="shop.html">Shop</a></li>
                                          <li><a href="shop-details.html">Shop Details</a></li>
                                       </ul>
                                    </li>
                                 </ul>)
                                 }
                               
                            </li>
                            <li className="menu-item" onMouseLeave={()=>handleMouseLeave(4)} >
                                <a href="#" onMouseEnter={()=>handleMouseEnter(4)} >BLOG</a>
                                {menu4===true ? ( <AiOutlineMinus style={{color:"red",fontWeight:"100"}}/>) : (   <AiOutlinePlus style={{color:"red",fontWeight:"100"}}/>)

}
                                 {
                                    menu4 && ( <div className="dropdowntwo dropdown_menu dropdown_menu--animated dropdown_menu-7" style={{ backgroundColor: '#070707' }}>
                                  <ul>
                                    <li><a href="index.html">Blog</a></li>
                                    <li><a href="index-2.html">Blog List</a></li>
                                    <li><a href="index-3.html">Blog Details</a></li>
                                    
                                 </ul>
                                    </div>)
                                 }
                               
                            </li>
                         
                            {/* Repeat the same pattern for other menu items */}
                        </ul>
                        <ul className='text-center'>
                        <li className="menu-item">
                         
                         <a href="#">Contact</a>
                    
                        
                     </li>
                        </ul>
                    </div>
                    <div class="col-xl-3 d-none d-xl-block">
                        <div class="d-flex justify-content-end">
                            <div class="tp-it-header__main-cta">
                                <p className='mb-0'><span style={{fontWeight:"300",fontSize:"1rem"}}><HiMailOpen style={{color:'red',fontSize:"20px"}}  /> SUPPORT EMAIL</span></p>
                                <p> <a href="mailto:info@gencio.com" style={{fontWeight:"600",fontSize:"1.3rem"}}>INFO@GENCIO.COM</a></p>
                               
                            </div>
                        </div>

                    </div>
                    <div class="col-9 d-xl-none">
                        <div class="tp-header-search-nav d-flex justify-content-end">
                            <div class="tp-header-search p-relative">
                                <form action="#">
                                    <input type="text" placeholder="Keyword..." />
                                    <button type="submit"><i class="fal fa-search"></i></button>
                                </form>
                            </div>
                            <div class="tp-header-nav">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
