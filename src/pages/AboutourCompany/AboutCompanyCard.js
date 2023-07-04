import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CompanyServices } from '../../constant/companyServiceCards'
import "./style.css"
const AboutCompanyCard = () => {
    return (
        <div>
            <Col lg={10} md={10} sm={12} className="mx-auto pt-3">
                <Row className="d-flex justify-content-center">
                    {CompanyServices?.map((e) =>
                        <Col lg={4} md={6} sm={6} xs={12} className="mb-5 d-flex justify-content-center">  <div className="card cardheight" >
                            <div className="content">
                                <img src={e.img} alt="" />
                                <p className="heading mb-0">{e.services}
                                </p><p className="para">
                                    {e.para}
                                </p>
                                <div className="btn ">Read more</div>
                            </div>
                        </div></Col>
                    )}

                </Row>

            </Col>

        </div>
    )
}

export default AboutCompanyCard