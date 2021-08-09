import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import axios from 'axios';
import ListaInline from '../ListaInline/ListaInline'

export default function Me({user}) {
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get(`/viajantes/${user.id}`)
      .then( (res) => {
      setViagens(res.data.Viagens);
      })
      .catch( (err) => console.log(err.response) )
    },[user.id]);
  return (
    <div>
      <p>{user.nome}</p>
      <Image width="400px" height="400px" src={user.imagemPerfil} roundedCircle />
      <p>{user.introducao}</p>
      <div className="viagens">
        <ListaInline itens={viagens} ifNone="Nenhuma viagem cadastrada."
          itensEnvolvidos="Viagens envolvido(a)" tituloAttr="localizacao" 
          rota="viagens"/>
      </div>
    </div>

  )
}
