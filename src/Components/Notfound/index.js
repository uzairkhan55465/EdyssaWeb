import Aos from 'aos';
import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs';
import Image1 from "../../assets/images/logo1.png"

import imgg from '../../assets/images/background/404.png'
const Notfound = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-img-404'>
            <div></div>

        </div>
        // <div
        //     style={{
        //         marginTop: '100px',
        //         height: '900px',
        //         width: '100%',

        //         display: 'flex',

        //     }}

        // >

        //     {/* <Container */}
        //     style={{

        //         marginTop: '200px',
        //         // display: 'flex',
        //         // flexDirection: 'column',
        //         // alignItems: 'start',
        //         // backgroundImage: `url(${imgg})`,
        //         backgroundSize: 'cover',
        //         backgroundPosition: 'center',
        //     }}
        //     >
        //     <img src={Image1} alt="image1" />
        //     <p style={{ fontSize: "150px" }}>OPPS!</p>
        //     <h1>The page can not be found</h1>
        //     <p style={{ fontSize: "30px" }}>Start building your first prototype in no time ogency intitate lorum lispem lroem lroemfirst protoype in no time ogency intitate lorum lispem lroem lroem</p>
        //     <Button variant="primary" className="ml-2" style={{ fontSize: "30px" }}>Go to Home </Button>
        //     <h1 style={{ fontFamily: "inherit" }}>Follow us</h1>

        //     {/* </Container> */}

        //     {/* <Container */}
        //     style={{


        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'start',
        //         backgroundImage: `url(${imgg})`,
        //         backgroundSize: 'cover',
        //         backgroundPosition: 'center',
        //     }}
        //     >



        //     {/* </Container> */}
        // </div>
    )
}

export default Notfound