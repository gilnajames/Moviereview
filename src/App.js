import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';

import Myreview from './pages/Myreview';
import Addreview from './pages/Addreview';

import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';





function App() {
  const {isAuthToken, setIsAuthToken} = useContext(isAuthTokenContext)
  return(
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
   
    <Route path='/login' element={<Login/>}/>
    <Route path='/register'  element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/movies' element={<Movies/>}/>
   
    <Route path='/myreview' element={<Myreview/>}/>
    <Route path='/addreview' element={<Addreview/>}/>
   
    
    
    </Routes>
   <Footer/>
    
    </>

  );
}

export default App;
