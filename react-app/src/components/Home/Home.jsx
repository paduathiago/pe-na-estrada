import React from 'react'
import './Home.css'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Logo from '../../assets/logo.png'

export default function Home(){
    return(
        <div className="Home">
            <Menu />
            <div className="row m-5">
                <figure>
                    <img src={Logo}
                    alt="Logo"
                    width="30%"
                    padding="0"
                    className="logoMovel"
                    />
                    <figcaption className="descLogo">
                        Rotas Worldwide
                    </figcaption>
                </figure>
            </div>
            <Footer />
        </div>
    )
}