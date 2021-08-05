import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import axios from 'axios';

//MENU TEMPORARIO! ARRUMAR!!!
export default function Menu(){
    function logout(){
        axios.get('/logout').catch((err)=>console.log(err.response.data))
    }
    return(
        <div className="Menu">
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>
            <Link to="/login" className= "Link">
                <button>
                    Login
                </button>
            </Link>
            <Link to='/viagens'>
                <button>
                    Viagens
                </button>
            </Link>
            <Link to='/viajantes'>
                <button>
                    Viajantes
                </button>
            </Link>
            <Link to='/me'>
                <button>
                    Perfil
                </button> 
            </Link>
                <button onClick={logout}>
                    Logout
                </button>
        </div>
    );
}