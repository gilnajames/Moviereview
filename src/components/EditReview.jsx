import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { editUserReviewAPI } from '../services/allAPI';
import { editReviewResponseContext } from '../context/ContextShare';


function EditReview({review}) {
    const {editReviewResponse, setEditReviewResponse} = useContext(editReviewResponseContext)
    const[preview, setPreview]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[movieDetails,setmovieDetails] = useState({
        id: review._id,
        moviename:review.moviename,
        director:review.director,
        Starring:review.Starring,
        reviewer:review.reviewer,
        overview:review.overview,
        MovieImage:""
    })
    
    useEffect(() => {
        if (movieDetails.MovieImage) {
            setPreview(URL.createObjectURL(movieDetails.MovieImage))
        }
    }, [movieDetails.MovieImage])


    const handleReset = () => {
        setmovieDetails({
            moviename:review.moviename,
            director:review.director,
            Starring:review.Starring,
            reviewer:review.reviewer,
            overview:review.overview,
            MovieImage:""
        })
        setPreview("")
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("===review details inside edit===");
        console.log(movieDetails);
        const{ id,moviename,director,Starring,reviewer,overview,MovieImage}=movieDetails;
        if(!id ||!moviename ||!director || !Starring || !reviewer || !overview ){
          alert("please fill the form completely")
        }
        else {
        const reqBody=new FormData();
        reqBody.append("moviename",moviename);
        reqBody.append("director",director);
        reqBody.append("Starring",Starring);
        reqBody.append("reviewer",reviewer);
        reqBody.append("overview",overview);
        reqBody.append("MovieImage",MovieImage);
        const token = sessionStorage.getItem("token")
        if (preview) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }

            const result = await editUserReviewAPI(id, reqBody, reqHeader);
            if (result.status === 200) {
                setEditReviewResponse(result)
                alert("Updated Successfully")
                handleClose()
            }
            else {
                console.log(result.response.data)
            }

        }
        else {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            } 

            const result = await editUserReviewAPI(id, reqBody, reqHeader);
            if (result.status === 200) {
                setEditReviewResponse(result)
                alert("Updated Successfully")
                handleClose()
            }
            else {
                console.log(result.response.data)
            }

        }
    }
}

  return (
    <>
     <Button variant='info' className='flex-grow-1 me-2' onClick={handleShow}>Edit</Button>
 <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4'>
                        <label htmlFor="movie-img" className='btn'>
                        <input id='movie-img' type="file" style={{display:"none"}}
           
           onChange={(e)=>setmovieDetails({...movieDetails,MovieImage:e.target.files[0]})}
           />
                                <img
                                    height={"200px"}
                                    width={"200px"}
                                   
                                    src={preview?preview:`${BASE_URL}/uploads/${review.MovieImage}`}
           
                                   />
                            </label>
                        </div>
                        <div className='col-lg-8 col-md-8 d-flex justify-content-center align-items-center flex-column'>
                            <div className='mb-3 mt-3 w-100'>
                            <input type='text' className='form-control' placeholder=' movie name'
               
               value={movieDetails.moviename}
               onChange={(e)=>setmovieDetails({...movieDetails,moviename:e.target.value})}
          
                                />
                            </div>
                            <div className='mb-3 mt-3 w-100'>
                            <input type='text' className='form-control' placeholder=' director name'
              
              value={movieDetails.director}
              onChange={(e)=>setmovieDetails({...movieDetails,director:e.target.value})}
            
                              />
                            </div>
                            <div className='mb-3 mt-3 w-100'>
                            <input type='text' className='form-control' placeholder=' Starring'
                
                value={movieDetails.Starring}
                onChange={(e)=>setmovieDetails({...movieDetails,Starring:e.target.value})}
           
                            />
                            </div>
                            <div className='mb-3 mt-3 w-100'>
                            <input type='text' className='form-control' placeholder='reviewer name'
               
               value={movieDetails.reviewer}
               onChange={(e)=>setmovieDetails({...movieDetails,reviewer:e.target.value})}
            
            />
                            </div>
                            <div className='mb-3 mt-3 w-100'>
                                <textarea name="" id="" cols="12" rows="10"className='form-control'
                                   
                                   value={movieDetails.overview}
                                   onChange={(e)=>setmovieDetails({...movieDetails,overview:e.target.value})}
                             
                                   placeholder='overview'>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="primary"  onClick={handleUpdate}>
                        Update Project
                    </Button>
                </Modal.Footer>
            </Modal>   
  
  
  
 


  
  </>
  )
}

export default EditReview