import axios from 'axios';
import { useState, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Viagens.css';

export default function Viagens() {
    const [viajante, setViajante] = useState(false);
    useEffect(() => {
        axios.get('/me')
        .then( (res) => setViajante(res.data) )
        .catch( (err) => console.log(err.response) )
    }, []);

  if(viajante)
    return (
      <div className="Viagens">
        <Nav className="flex-column">
          <Nav.Item as="h1">Viagens</Nav.Item>
          <hr />
          <img width="130" height="130" src={viajante.imagemPerfil} alt="Viajante" />
          <Nav.Item>{viajante.nome}</Nav.Item>
          <Nav.Item>{viajante.email}</Nav.Item>
          <hr />
          <Nav.Link href="/viagens/viajantes">Viajantes</Nav.Link>
        </Nav>
      </div>
    )
  else
    return (
      <h1>Loading</h1>
    )
}