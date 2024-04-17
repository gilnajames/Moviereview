import React, { useContext, useEffect } from 'react';
import { Row, Col, Card} from 'react-bootstrap';

import { deleteReviewAPI, userReviewAPI } from '../services/allAPI';
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';
import { addReviewResponseContext, editReviewResponseContext } from '../context/ContextShare';
import EditReview from '../components/EditReview';
import Header from '../components/Header';
import ReadReview from '../components/ReadReview';


function Myreview() {
  const {addReviewResponse, setAddReviewResponse}= useContext(addReviewResponseContext)
  const {editReviewResponse, setEditReviewResponse} = useContext(editReviewResponseContext)
  
  const [userreview, setUserreview] = useState([]);

  const getUserreview = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
    const result = await userReviewAPI(reqHeader);
    setUserreview(result.data);
  };

  useEffect(() => {
    getUserreview();
  },[addReviewResponse,editReviewResponse]);

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader= {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
    const result = await deleteReviewAPI(id,reqHeader);
    if(result.status===200){
      alert("Project Deleted Successfully");
      getUserreview();
    }
  }

  return (
    <>
     <Header logout={'logout'}/>
      <Row className='container-fluid mt-5'>
        <Col md={12}>
          <div className='card shadow p-5 ms-3 mt-5 mb-5'>
            <div className='d-flex align-items-center justify-content-between'>
              <h3 className='text-success'>My Reviews</h3>
              {/* <Link to="/addreview">
                <Button variant='danger'>Add Review</Button>
              </Link> */}
            </div>
            <div className='mt-4' style={{ overflowX: 'auto' }}>
              <div className="d-flex">

              {userreview?.length > 0 ? (
  userreview.map((item, index) => (
    <Card key={index} style={{ width: '20rem', height: '22rem', marginBottom: '20px', marginRight:'20px' }}>
      <Card.Img variant="top" style={{ height: '100%', objectFit: 'cover' }}  src={`${BASE_URL}/uploads/${item.MovieImage}`} />
      <Card.Body>
        <Card.Title >{item.moviename}</Card.Title>
        <div className='d-flex justify-content-between'>
       
    {/* <Button variant='info' className='flex-grow-1 me-2'>Read</Button> */}
    <ReadReview review={item}/>

       <EditReview review={item}/>
          <Button variant='danger' className='flex-grow-1'  onClick={(e)=>handleDelete(item._id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  ))
) : (
  <p className='text-danger fw-bolder fs-5 mt-3'>No reviews uploaded yet !!</p>
)}

              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Myreview;
