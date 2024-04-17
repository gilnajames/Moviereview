import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Reviewcards from '../components/Reviewcards'
import { allReviewAPI } from '../services/allAPI'
import Header from '../components/Header'



function Movies() {
  const [searchKey, setSearchKey] = useState((""))
  const [allreviews, setAllreviews] = useState([])
  const getAllreviews = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

      }
  const result = await allReviewAPI(searchKey,reqHeader);
    console.log(result.data);
    setAllreviews(result.data)
  }
}
  useEffect(() => {
    getAllreviews()
  }, [searchKey])
  console.log(searchKey);
  return (
    <>
     <Header logout={'logout'}/>
    <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>

<h3 className='mt-5 p-5'>All reviews</h3>
<div  className={'d-flex mt-5 w-25'}>
<input type='text' className='form-control' placeholder='search movie reviews' 
 onChange={(e) => setSearchKey(e.target.value)} />
<i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{marginLeft:"-40px",color:"lightblue"}}></i>
</div>
</div>
    <Row className='mt-5 mb-5 ms-5'>
    {
          allreviews?.length > 0 ?
          allreviews.map((item) => (
              <Col md={6} lg={4}>
                <Reviewcards review={item} />
              </Col>
            )) :
            <div>
               <p>No Projects Uploaded Yet</p>


            </div>

}



     
    </Row>
    
    
    
    </>
  )
}

export default Movies