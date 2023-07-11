import React, { useState } from 'react';
import Logo from "../../assets/images/logo-orange.webp"
import "./style.css"
import { AiOutlinePlus} from 'react-icons/ai'
import {HiMailOpen} from 'react-icons/hi'
const Header = () => {
    // const [menu1,setMenu1] =useState(false)
    // const [menu2,setMenu2] =useState(false)
    // const [menu3,setMenu3] =useState(false)
    // const [menu4,setMenu4] =useState(false)

//    const handleMouseEnter=(menunumber)=>{
// switch (menunumber) {
//     case 1:
//         setMenu1()
// }

//    }

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
                            <li className="menu-item" >
                                <a href="#">Home</a>
                                 <AiOutlinePlus style={{color:"red",fontWeight:"100"}}/>
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                                  
                                </div> */}
                            </li>
                            <li className="menu-item">
                                <a href="#">About</a>
                                
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                                 
                                    sadasdasdas
                                </div> */}
                            </li>
                            <li className="menu-item">
                                <a href="#">Shop</a>
                                <AiOutlinePlus style={{color:"red"}}/>
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                              
                                    sadasdasd
                                </div> */}
                            </li>
                            <li className="menu-item">
                                <a href="#">Pages</a>
                                <AiOutlinePlus style={{color:"red"}}/>
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                                   
                                    sadasdasd
                                </div> */}
                            </li>
                            <li className="menu-item">
                                <a href="#">Blog</a>
                                <AiOutlinePlus style={{color:"red"}}/>
                                {/* <div className="dropdown" style={{ backgroundColor: '#070707' }}>
                                   
                                   
                                    sadasdasd
                                </div> */}
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
