import React, {useEffect } from 'react'
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import {useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import EditProfile from './EditProfile';

const Home = () => {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser == null) {
        navigate("/login");
        return;
      }
    });
  },[])

  return (
    <>
      <NavBar/>
      <h2 style={{textAlign: 'center', marginTop: '50px'}}>Welcome to Home Page</h2>
      
    </>
  )
}

export default Home