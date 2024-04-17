import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { BASE_URL } from '../services/baseurl';
import  {  useState } from 'react'
function ReadReview({review}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant='primary' className='flex-grow-1 me-2' onClick={handleShow}>Read</Button>


    <Modal show={show} onHide={handleClose} size="xl">
    <Modal.Header closeButton>
      <Modal.Title> <span className='fw-bolder'>Movie Name: </span>{review.moviename}</Modal.Title>
    </Modal.Header>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 '>
                    <label htmlFor="movie-img" className='btn'>
                  <img
                                height={"200px"}
                                width={"200px"}
                               
                                src={`${BASE_URL}/uploads/${review.MovieImage}`}></img>
       
                            
                        </label>
                        <h5><span className='fw-bolder '>Director:</span>{review.director}</h5>
                        <h4><span className='fw-bolder' style={{backgroundColor:"yellow"}}>Reviewer:</span>{review.reviewer}</h4>

                    </div>
                  

                    <div className='col-lg-8 col-md-8 d-flex justify-content-center align-items-center flex-column'>
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

export default ReadReview