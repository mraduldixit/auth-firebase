import React, { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, getDownloadURL } from 'firebase/storage'
import {NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({});
    const [profileURL, setProfileURL] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const imagesListRef = ref(storage, currentUser.email + "/profileImage");
            getDownloadURL(imagesListRef).then((res) => {
                setProfileURL(res);
            })
        });
    }, [])

    const logout = async () => {
        await signOut(auth);
        navigate("/login")
    };

    return (
        <nav>
            
            <div className="navIcon">
                <h2>{user.displayName}</h2>
            </div>
            <div className='userDetail'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/edit'>Edit Profile</NavLink>
                <p onClick={logout}>SignOut</p>

                <img src={profileURL} alt="Profile"  />
            </div>
            
        </nav>
    )
}

export default NavBar