import React, {useState} from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Login from './Component/Login'
import Signup from './Component/Signup';
import { Routes,Route } from "react-router-dom";





function App() {
  const [user, setLoginUser]= useState()
  return (
    
    <>
   
    
    <Routes>
    <Route path="/" element={ <Home/> }/>

    {/* <Route path="/" element={user && user._id ? <Login/> :<Navbar/>}/> */}

    <Route exact path="/" element={user && user._id ? <Home/> :<Login/>}/>
    <Route  path='/Signup' element={<Signup/>} />
    <Route  path='/Login' element={<Login setLoginUser={setLoginUser} />} />
    
    </Routes>
   
 
    </>
  )
}

export default App
