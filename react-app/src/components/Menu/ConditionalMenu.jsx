import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MenuDeslogado from '../MenuDeslogado/MenuDeslogado';
import Menu from '../Menu/Menu';

export default function ConditionalMenu(){
    const [user, setUser] = useState(false);
    useEffect(() => {
      axios.get('/me')
        .then( (res) => setUser(res.data) )
        .catch( (err) => console.log(err.response) )
    }, []);
    if(user)
        return <Menu />
    else
        return <MenuDeslogado />
}