
import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import imgg from '../../assets/images/background/counter-bg.png'

const Bloglistview = (props) => {

  return (
    <Container
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${imgg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className='d-flex justify-content-center'>
        <p style={{ fontSize: `${props.fontSize}`, fontWeight: `${props.fontWeight}`, fontFamily: props.fontFamily }}>{props.heading}</p>


      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="text" className="ml-2" style={{ fontSize: '20px' }}>Home </Button>
        <a href="#" style={{ fontSize: '20px' }}>{props.link}</a>

      </div>

    </Container>
  )
}

export default Bloglistview
