
import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbaar from '../../Components/Navbaar'
import Bloglistview from '../../Components/Bloglistview'
import Notfound from '../../Components/Notfound'

const Mainpage = () => {
  
    return (
       <>
       <Navbaar/>
      <Bloglistview heading = "Faq & Help" link = "Faq & Help" fontsize="50px"

      /> 
    
      {/* <Notfound/> */}

       </>
    )
}

export default Mainpage
