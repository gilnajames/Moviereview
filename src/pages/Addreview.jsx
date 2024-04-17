import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { addReviewAPI } from '../services/allAPI';
import { addReviewResponseContext } from '../context/ContextShare';
import Header from '../components/Header';


function Addreview() {
  const {addReviewResponse, setAddReviewResponse} = useContext(addReviewResponseContext)
  

    const[movieDetails,setmovieDetails] = useState({

        moviename:"",
        director:"",
        Starring:"",
        reviewer:"",
        overview:"",
        MovieImage:""
    }) 
    const[token,setToken]=useState("");
    const[preview, setPreview]=useState("");
    useEffect(() => {
        if(movieDetails.MovieImage){
            setPreview(URL.createObjectURL(movieDetails.MovieImage))
          }
          },[movieDetails.MovieImage])

          const handleCloseclear=()=>{
            setmovieDetails({
                moviename:"",
                director:"",
                Starring:"",
                reviewer:"",
                overview:"",
                MovieImage:""
      
            })
            setPreview("")
        }

        useEffect(()=>{
            if(sessionStorage.token){
              setToken(sessionStorage.getItem("token"))
            }
          },[])

        const handleAdd=async(e)=>{
            e.preventDefault();
            const{moviename,director,Starring,reviewer,overview,MovieImage}=movieDetails;
            if(!moviename ||!director || !Starring || !reviewer || !overview|| !MovieImage){
              alert("please fill the form completely")
            }
            else{
                console.log("=== final data to upload==")
        console.log(movieDetails)

        const reqBody=new FormData();
        reqBody.append("moviename",moviename);
        reqBody.append("director",director);
        reqBody.append("Starring",Starring);
        reqBody.append("reviewer",reviewer);
        reqBody.append("overview",overview);
        reqBody.append("MovieImage",MovieImage);

        const reqHeader ={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
        const result= await addReviewAPI(reqBody,reqHeader)
        console.log("result")
           if(result.status == 200){
            setAddReviewResponse(result)
            alert("review added sucessfully........")
            handleCloseclear()
            window.location.href = "myreview";
            
           }   else{
            alert(result.response.data)
           }
            }

        }
   
  return (
  <>
   <Header logout={'logout'}/>
   <h3 className="text-success mt-5">Add New Review</h3>
  <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <label htmlFor="movie-img" className='btn'>
            <input id='movie-img' type="file" style={{display:"none"}}
            onChange={(e)=>setmovieDetails({...movieDetails,MovieImage:e.target.files[0]})}
            />
              <img
            height={"300px"}
            width={"300px"}
            src={preview?preview:'https://d2rmi16dbt0qpu.cloudfront.net/assets/canvas_template/custom/feature-icon-3-52794adf3725aa7c15ea7aab07c55f6ccd8c52f46efc0256dc17405d9dada590.png'}
            alt=''
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
              <textarea name="" id="" cols="12" rows="20"className='form-control' placeholder='overview'
                value={movieDetails.overview}
                onChange={(e)=>setmovieDetails({...movieDetails,overview:e.target.value})}
              />
            </div>
            
        </div>
        <div className="d-flex justify-content-center mt-3 ">
        <Button variant="secondary" size="md" className="me-2"onClick={handleCloseclear}>
          Clear
        </Button>
       
        <Button variant="primary" size="md"onClick={handleAdd}>
          Add Review
        </Button>
      </div>
          </div>

         
  
  
  
  </>
  )
}

export default Addreview