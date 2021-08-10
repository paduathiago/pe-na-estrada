import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import './Viajante.css'
import ListaInline from '../../ListaInline/ListaInline'
import MenuModViajante from '../../Menu/MenuModViajante/MenuModViajante'

export default function Viajante( {match,user}) {
  const [viajante, setViajante] = useState(false);
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get(`/viajantes/${match.params.id}`)
      .then( (res) => {
        setViajante(res.data.Viajante);
        setViagens(res.data.Viagens);
      })
      .catch( (err) => console.log(err.response) )
  },[match.params.id]);
  
  return (
    <div>
      <MenuModViajante user={user} match={match}/>
      <p>{viajante.nome}</p>
      <Image width="400px" height="400px" src={viajante.imagemPerfil} roundedCircle />
      <p>{viajante.introducao}</p>
      <div className="viagens">
      <ListaInline itens={viagens} ifNone="Nenhuma viagem cadastrada."
        itensEnvolvidos="Viagens envolvido(a)" tituloAttr="localizacao" rota="viagens"/>
      </div>
    </div>
  )
}
