import React from 'react'
import { Link } from 'react-router-dom'

//MENU TEMPORARIO! ARRUMAR!!!
export default function Menu(){
    return(
        <div className="Menu">
            <Link to="/login">
                <button className="login-button">
                    Login
                </button>
            </Link>
            <Link to='/'>
                <button className="home-button">
                    Home
                </button>
            </Link>
        </div>
    );
}