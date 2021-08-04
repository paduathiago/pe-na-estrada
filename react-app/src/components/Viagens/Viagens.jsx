import axios from 'axios';
import { useState, useEffect } from 'react';
import { ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
// import { useHistory } from 'react-router';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Viagens.css';

export default function Viagens() {
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get('/viagens/?limit=8')
    .then( (res) => setViagens(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);
    
    if(viagens)
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={viagens[0].imagemViagem} />
        <Card.Body>
          <Card.Title>{viagens[0].localizacao}</Card.Title>
          <Card.Text>
            {viagens[0].descricao.length > 100? viagens[0].descricao.substring(0, 100) : null}...
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Início: {viagens[0].inicio}</ListGroupItem>
          <ListGroupItem>Fim: {viagens[0].fim}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Ver mais</Button>
        </Card.Body>
      </Card>
    )
  else
    return (
      <h1>Loading</h1>
    )
}