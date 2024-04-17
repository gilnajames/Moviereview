import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import homepageImage from '../assets/header.png'
import { loginAPI } from '../services/allAPI';
import { isAuthTokenContext } from '../context/ContextShare';



function Login() {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });



  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData;
    if (!email || !password) {
      alert("please fill the form completilly")
    }
    else {

      const loginResult = await loginAPI(userData);
      if (loginResult.status == 200) {
        alert("login sucessfully")
        console.log("==login result==")
        console.log(loginResult.data)
        sessionStorage.setItem("existingUser", JSON.stringify(loginResult.data.existingUser))
        sessionStorage.setItem("token", loginResult.data.token)
        setIsAuthToken(true)
        navigate('/dashboard')
      }

      else {
        alert(loginResult.response.data)
      }
    }
  }
  return (
    <>

     
<div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
  <div className='container w-75'>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ backgroundColor: 'skyblue', padding: '20px', borderRadius: '10px' }}>
        <Link to={'/'} style={{ textDecoration: "none", color: "blue", fontWeight: "20px", marginBottom: "20px" }}>
          <i className="fa-solid fa-arrow-left me-1"></i>Back To Home
        </Link>
        <h5 className='text-light mt-3'>Sign In Your Account</h5>
        <Form>
          <div className='p-3 rounded mt-3' style={{ maxWidth: '300px' }}>
            <div className='row align-items-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  value={userData.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  value={userData.password}
                />
              </Form.Group>
              <div>
                <Link to={'/Dashboard'}>
                  <button className='btn btn-warning rounded mt-3' onClick={handleLogin}>Login</button>
                </Link>
                <p>New User? Click here to <Link to={'/register'} style={{ color: "blue" }}>Register</Link></p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</div>






    </>
  )
}

export default Login