import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import './Viagem.css'
import ListaInline from '../../ListaInline/ListaInline'


export default function Viagem( {match}) {
  const [viagem, setViagem] = useState(false);
  const [viajantes, setViajantes] = useState(false);
  useEffect(() => {
    axios.get(`/viagens/${match.params.id}`)
      .then( (res) => {
        setViagem(res.data.Viagem);
        setViajantes(res.data.Viajantes)
      })
      .catch( (err) => console.log(err.response) )
  },[match.params.id]);

  return (
    <div>
      <p>{viagem.localizacao}</p>
      <Image width="400px" height="400px" src={viagem.imagemViagem} roundedCircle />
      <p>{viagem.descricao}</p>
      <div className="viajantes">
        <ListaInline itens={viajantes} ifNone="Nenhum viajante cadastrado nessa viagem"
        itensEnvolvidos="Viajantes envolvidos" tituloAttr="nome" rota="viajantes"/>
      </div>
    </div>
  )
}
