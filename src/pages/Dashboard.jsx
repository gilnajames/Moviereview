import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Reviewcards from'../components/Reviewcards'
import { homeReviewAPI } from '../services/allAPI'
import Header from '../components/Header'


function Dashboard() {
  const [homereview,  setHomeReview] = useState([])
  const[username,setUsername] = useState("");
  useEffect(()=> {
    const existingUserData = JSON.parse(sessionStorage.getItem("existingUser"));
    console.log(existingUserData)
    setUsername(existingUserData.username)
  }, [])


  const getHomeReview = async () => {
    const result = await homeReviewAPI()
   
    setHomeReview(result.data)
}
useEffect(() => {
  getHomeReview();
},[])
 



  return (
    <>
     <Header logout={'logout'}/>
    <Row className='mt-5'>
    <Col md={12}>
    <h1 className='mt-5 ms-3'>Welcome<span style={{color:"orange"}}>{username}</span></h1> 
    </Col>
    </Row>
<div className='mt-5 allreviews'>

     <div className='text-center'>
      
      <Row className='mt-5 mb-5 ms-5'>
      {
    homereview?.length > 0 ? 
        homereview.reverse().map((item) => (
            <Col md={6} lg={4}>
                <Reviewcards review={item} />
            </Col>
        )) : 
        <p>No projects found</p>
}


</Row>
      
    </div>




  <div className='text-center mt-5'>
    
        <h6> <Link to={'/movies'}>see more</Link></h6>


          </div>


</div>






    
    
    
    
    </>
  )
}

export default Dashboard