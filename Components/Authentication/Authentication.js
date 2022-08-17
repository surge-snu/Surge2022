import React, { Component } from "react";
import './Authentication.scss';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export default function Authentication() {
    const [hash, setHash] = React.useState("");
    const router = useRouter()
    React.useEffect(() => {
        window.onhashchange = () => {
            
            setHash(window.location.hash);
            console.log(window.location.hash);
        };
        
    }, []);
   
    return (
        <div className='Authentication'>
            <h2>SURGE</h2>
            <div className='Authentication__tabs'>
                <a href="#login" className={hash === '#login' ? 'route--active' : ''}>Login</a>
                <a href="#signup" className={hash === '#signup' ? 'route--active' : ''}>Sign Up</a>
            </div>
            {hash === "#login" ? <Login /> : <SignUp />}
        </div>
    )
}