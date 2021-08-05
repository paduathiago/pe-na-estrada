import React from 'react'
import { ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';


export default function ViagemCard(props) {
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
                    <ListGroupItem>Início: {props.viagens.inicio}</ListGroupItem>
                    <ListGroupItem>Fim: {props.viagens.fim}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Ver mais</Button>
                </Card.Body>
            </Card>            
        </div>
    )
}
