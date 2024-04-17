import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link,useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../context/ContextShare';


function Header({logout}) {
  const {isAuthToken, setIsAuthToken} = useContext(isAuthTokenContext)


  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
      if (sessionStorage.getItem("token")) {
          setIsLogin(true)
      }
  }, [])
 
  const navigate = useNavigate()
  const handleLogout = ()=>{
    // clear session storage
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    // navigate to home page
    setIsAuthToken(false)
    navigate('/')
  }
  return (
    <>
    
    <Navbar className="bg-body-tertiary fixed-top"  >
     
        <Container >
        <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home" >
           

              <h5 style={{ fontFamily: 'Roboto, sans-serif',color:"black" }}>Movies Review</h5>
  
  
              </Navbar.Brand>
              </Link>


              <Nav className="justify-content-end">
          
           
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
             <Nav.Link href="/myreview">Myreviews</Nav.Link>
             <Nav.Link href="/addreview">Add Review</Nav.Link>
          
           {
            <Nav.Link className='btn' onClick={handleLogout}>log out</Nav.Link>
           }
            </Nav>
        </Container>
       
      </Navbar>
    
    
    </>
  )
}

export default Header