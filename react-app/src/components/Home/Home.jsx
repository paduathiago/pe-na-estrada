import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(){
    return(
        <div className="Home">
            <div className="Header">
                <div className="flex-title">
                    Titulo.
                </div>
                <Link to="/login">
                    <button className="login-button">
                        Login
                    </button>
                </Link>
            </div>
            <div className="Conteudo">
                Conteudo.
            </div>
        </div>
    )
}