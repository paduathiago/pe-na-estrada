import React from 'react'
import '../../../assets/TextStyle/Fonts.css'
import '../../../assets/TextStyle/Sizes.css'
import '../../../assets/Colors/Colors.css'
import './LogoGiratoria.css'
import Logo from '../../../assets/logo.png'

export default function LogoGiratoria(){
    return(
        <div className="row m-5">
                <figure>
                    <img src={Logo}
                    alt="Logo"
                    width="30%"
                    padding="0"
                    className="logoMovel"
                    />
                    <figcaption className="descLogo Ftitulo Stitulo TazulClarin">
                        Rotas Worldwide
                    </figcaption>
                </figure>
            </div>
    );
}