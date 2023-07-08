
import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbaar from '../../Components/Navbaar'
import Bloglistview from '../../Components/Bloglistview'
import Notfound from '../../Components/Notfound'
import { Outlet } from 'react-router-dom'

const Mainpage = () => {

    return (
       <>
       <Navbaar/>
      <Outlet/>
    
      {/* <Notfound/> */}

       </>
    )
}

export default Mainpage
