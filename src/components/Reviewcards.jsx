import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



function Reviewcards({review}) {
  console.log("review cards",review);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      


<Card className='shadow text-center btn' style={{ width: '20rem', height: '22rem', marginBottom: '20px' }} onClick={handleShow}>
  <Card.Img variant="top" style={{ height: '100%', objectFit: 'cover' }} src={`${BASE_URL}/uploads/${review.MovieImage}`} />
  <Card.Body>
    <Card.Title>{review.moviename}</Card.Title>
    <p>
  <span className='fw-bolder'>Reviewer: </span>
  <span style={{ backgroundColor: 'yellow' }}>{review.reviewer}</span>
</p> </Card.Body>
</Card>

     
 




      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title> <span className='fw-bolder'>Movie Name: </span>{review.moviename}</Modal.Title>
        </Modal.Header>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 '>
                        <label htmlFor="movie-img" className='btn'>
                      <img
                                    height={"200px"}
                                    width={"200px"}
                                   
                                    src={`${BASE_URL}/uploads/${review.MovieImage}`}></img>
           
                                
                            </label>
                            <h5><span className='fw-bolder '>Director:</span>{review.director}</h5>
                            <h2><span className='fw-bolder' style={{backgroundColor:"yellow"}}>Reviewer:</span>{review.reviewer}</h2>

                        </div>
                      

                        <div className='col-lg-7 col-md-7 d-flex justify-content-center align-items-center flex-column'>
                            <div className='mb-3 mt-3 w-100'>
                         
                            <h4>Review</h4>
                              <p> {review.overview} </p>

                              <p><span className='fw-bolder mt-5 mr-3'>Starring:</span> {review.Starring}</p>
              
                            </div>
                            </div>

</div>





      </Modal>



    </>
  )
}

export default Reviewcards