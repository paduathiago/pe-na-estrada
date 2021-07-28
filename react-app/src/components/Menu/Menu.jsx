import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

//MENU TEMPORARIO! ARRUMAR!!!
export default function Menu(){
    return(
        <div className="Menu">
            <Link to='/'>
                <button className="home-button">
                    Home
                </button>
            </Link>
            <Link to="/login" className= "Link">
                <button className="login-button">
                    Login
                </button>
            </Link>
        </div>
    );
}