import React from 'react'
import { Col, Row } from 'react-bootstrap'
import homepageImage from '../assets/header.png'

import { Link } from 'react-router-dom'
function Home() {
    return (
     


        <>
            <div className='mb-3 mt-5 d-flex align-items-center justify-content-center' style={{ width: "100%", height: "600px", backgroundImage: `url(${homepageImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container-fluid rounded text-center' style={{ fontFamily: 'Libre Baskerville, serif',fontWeight: 'bold' }}>
                    <Row className='p-5'>
                        <Col sm={12}>
                            <h1 className='text-light mb-3' style={{ fontSize: "50px", fontWeight: "600" }}>Welcome To The World Of </h1>
                            <h3 className='text-light mb-3' style={{ fontSize: "50px", fontWeight: "600" }}> Reviews Writting </h3>
                            <Link to={'/login'}>
                            <button style={{color:"black", backgroundColor:"white"}} className='btn  rounded'>Write a review <i className="fa-solid fa-arrow-right ms-2"></i></button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>






        </>





    )
}

export default Home