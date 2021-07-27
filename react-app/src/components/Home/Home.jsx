import React from 'react'
import './Home.css'
import Menu from '../Menu/Menu'

export default function Home(){
    return(
        <div className="Home">
            <Menu />
            <div className="Conteudo">
                Conteudo.
            </div>
        </div>
    )
}