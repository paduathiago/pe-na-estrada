import React from 'react'
import { Link } from 'react-router-dom'
import './MenuDeslogado.css'

export default function Menu(){
    return(
        <div className="Menu">
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>
            <Link to='/viagens'>
                <button>
                    Viagens
                </button>
            </Link>
            <Link to="/login" className= "Link">
                <button>
                    Login
                </button>
            </Link>
        </div>
    );
}