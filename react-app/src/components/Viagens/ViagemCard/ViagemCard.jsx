import React from 'react'
import { ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ViagemCard(props) {

  let dataInicio = new Date(props.viagens.inicio)
  let dataFim = new Date(props.viagens.fim)
  return (
    <div className="viagem-card">
      <Card style={{ width: '16vw'}}>
        <Card.Img style={{ height: '21vh' }} variant="top" src={props.viagens.imagemViagem}   />
        <Card.Body>
          <Card.Title>{props.viagens.localizacao}</Card.Title>
          <Card.Text style={{height: '100px'}}>
            {props.viagens.descricao.length > 100? props.viagens.descricao.substring(0, 100)+"..." : props.viagens.descricao}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Início: {dataInicio.toLocaleDateString()}</ListGroupItem>
          <ListGroupItem>Fim: {dataFim.toLocaleDateString()}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/viagens/${props.viagens.id}`}>
            <Button variant="primary">
                Ver mais
            </Button>
          </Link>                        
        </Card.Body>
      </Card>            
    </div>
  )
}
