
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

const Foooter = () => {
    return (
        <div className='main-div-footer mt-5'>

            <footer className='futer'>

                <Container className='p-4'>

                    <Row>

                        <Col lg='5'>

                            <div className='jjj'></div>

                            <h6 className=' class-for-line text-white fw-bold'>



                                What We offer

                            </h6>

                        </Col>

                        <Col lg='7'>

                            <p className='paragraph'>

                                Your Digital Journey with Our Premier Website Development & Digital Marketing Services

                            </p>

                        </Col>

                    </Row>

                    <Row>
                        <Col lg='5' md='12 d-flex justify-content-center '>
                            <h2 className='heading-2'>
                                Your Digital Journey with Our Premier Website Development & Digital Marketing Services
                            </h2>
                        </Col>
                    </Row>

                    <Row className='mt-5 pt-5'>

                        <Col lg='4' md='4' sm='6'>

                            <div className='jjj'></div>


                            <h6 className=' w-50 text-light fw-bold'>


                                Google Cloud digital
                                & web dev services

                            </h6>

                            <p className='paragraph'>
                                We believe in producing tangible results with efficient
                                customer support.
                            </p>

                        </Col>

                        <Col lg='4' md='4' sm='6'>

                            <div className='jjj'></div>

                            <h6 className='text-light w-50 fw-bold'>

                                Google Search/Apps
                                expertise

                            </h6>

                            <p className='paragraph'>
                                At jointure ladyship an insisted so humanity he. Friendly
                                bachelor entrance to on by. As put impossible own
                                apartments b
                            </p>

                        </Col>

                        <Col lg='4' md='4' sm='6'>

                            <div className='jjj'></div>

                            <h6 className='text-light w-50 fw-bold'>

                                ROI & lead gen end-to-
                                end solutions

                            </h6>

                            <p className='paragraph'>
                                At jointure ladyship an insisted so humanity he. Friendly
                                bachelor entrance to on by. As put impossible own
                                apartments b
                            </p>

                        </Col>

                    </Row>

                </Container>

            </footer>

        </div>
    )
}

export default Foooter