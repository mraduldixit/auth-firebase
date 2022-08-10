
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import React from 'react'
import Login from './components/Login';
import Register from './components/Register';
import UploadProfile from './components/UploadProfile';
import EditProfile from './components/EditProfile';
import './App.css'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/uploadprofile' element={<UploadProfile />} />
        <Route path='/edit' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;