import React from 'react'
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ViajanteCard(props) {
  return (
    <div className="viajante-card">
      <Card style={{ width: '16vw'}}>
        <Card.Img style={{ height: '21vh' }} variant="top" src={props.viajantes.imagemPerfil}   />
        <Card.Body>
          <Card.Title>{props.viajantes.nome}</Card.Title>
          <Card.Text style={{height: '100px'}}>
            {props.viajantes.introducao.length > 100? props.viajantes.introducao.substring(0, 100)+"..." : props.viajantes.introducao}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Link to={`/viajantes/${props.viajantes.id}`}>
            <Button variant="primary">
                Ver mais
            </Button>
          </Link>                        
        </Card.Body>
      </Card>            
    </div>
  )
}
