import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

export default function Me({user}) {
    return (
        <div>
            <p>{user.nome}</p>
            <Image width="400px" height="400px" src={user.imagemPerfil} roundedCircle />
            <p>{user.introducao}</p>
        </div>
    )
}
