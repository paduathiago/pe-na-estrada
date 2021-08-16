import React from 'react'
import { ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ViagemCard.css';

export default function ViagemCard(props) {

  let dataInicio = new Date(props.viagens.inicio)
  let dataFim = new Date(props.viagens.fim)
  return (
    <div className="viagem-card">
      <Card>
        <Card.Img variant="top" src={props.viagens.imagemViagem}   />
        <Card.Body>
          <Card.Title>{props.viagens.localizacao}</Card.Title>
          <Card.Text >
            {props.viagens.descricao.length > 100? props.viagens.descricao.substring(0, 100)+"..." : props.viagens.descricao}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="inicio">Início: {dataInicio.toLocaleDateString()}</ListGroupItem>
          <ListGroupItem className="fim">Fim: {dataFim.toLocaleDateString()}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/viagens/${props.viagens.id}`}>
            <Button class="botaoViagens" variant="primary">
                Ver mais
            </Button>
          </Link>                        
        </Card.Body>
      </Card>            
    </div>
  )
}
