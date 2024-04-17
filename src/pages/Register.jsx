import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { registerAPI } from '../services/allAPI';

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      alert("Please fill the form completely");
    } else if (!email.endsWith('@gmail.com')) {
      alert("Please enter a valid Gmail address");
    } else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        alert("User registered successfully");
        setUserData({
          username: "",
          email: "",
          password: ""
        });
        navigate('/login')
      } else {
        alert(result.response.data);
      }
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ backgroundColor: 'skyblue', padding: '20px', borderRadius: '10px' }}>
        <h5 className='text-light mt-3'>Sign Up Your Account</h5>
        <Form>
          <div className=' p-3 rounded mt-3' style={{ maxWidth: '300px' }}>
            <div className='row align-items-center'>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                  value={userData.username}
                  size="sm" // Decreasing input size
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  value={userData.email}
                  size="sm" // Decreasing input size
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  value={userData.password}
                  size="sm" // Decreasing input size
                />
              </Form.Group>
              <div>
                <button className='btn btn-warning rounded mt-3' onClick={handleRegister}>Register</button>
                <p>Already A User? Click here to <Link to={'/login'} style={{ color: "blue" }}>Login</Link></p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
