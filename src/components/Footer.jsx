import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer d-flex align-items-center justify-content-evenly w-100 h-50 mb-5 mt-5  p-3' style={{backgroundColor:"black",color:"white"}}>
                {/* // <div style={{ width: "400px" }}>
                //     <Link to={'/'}>
                //     <h4 style={{textDecoration:"none"}} >
                //    <img height={"50px"} src='https://w7.pngwing.com/pngs/366/710/png-transparent-movie-projector-cinema-icon-creative-film-projectors-creative-artwork-creative-ads-film-thumbnail.png'/>
         
                //         Movie Reviews
                //     </h4>
                //     </Link>
                //     <h6>
                //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                //         liquid odio non et tenetur voluptates, doloremque fugit exe
                //         ationem temporibus aperiam, provident voluptatum illum sunt
                //         esse similique. Quidem ab commodi nulla?
                //     </h6>
                // </div>*/}

                
               
                <div>
                    <h4>Contact us</h4>
                    <div className='d-flex'>
                        <input type="text" name="" id=""
                            placeholder='Enter your Email' className='form-control' />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4 mb-3 ms-3 mt-3'>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-facebook "></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-instagram"></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-twitter "></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-linkedin "></i>
                    </div>

                </div>

          
            <div className='text-center'>
                <p>Copyright &#169; 2023. Movie Review built with React </p>
            </div>
            </div> 
    
    
    
    </>
  )
}

export default Footer