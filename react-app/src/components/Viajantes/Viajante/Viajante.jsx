import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import './ViajanteV2.css'
import './Viajante.css';
import ListaInline from '../../ListaInline/ListaInline'
import MenuModViajante from '../../Menu/MenuModViajante/MenuModViajante'
import erroPrinter from '../../../erroPrinter';

export default function Viajante( {match,user}) {
  const [viajante, setViajante] = useState(false);
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get(`/viajantes/${match.params.id}`)
      .then( (res) => {
        setViajante(res.data.Viajante);
        setViagens(res.data.Viagens);
      })
      .catch(erroPrinter)
  },[match.params.id]);
  if(!user)
    return <p>Você precisa estar logado para acessar essa página!</p>
  else
    return (
      <div className="backUser">
        <div className="divUser">
          <MenuModViajante user={user} match={match}/>
          <div className="divImgIntro">
            <p className="pNome">{viajante.nome}</p>
            <Image width="400px" height="400px" src={viajante.imagemPerfil} roundedCircle />
            <p className="pIntro">{viajante.introducao}</p>
            <div className="viagens">
            <ListaInline itens={viagens} ifNone="Nenhuma viagem cadastrada."
              itensEnvolvidos="Viagens envolvido(a)" tituloAttr="localizacao" rota="viagens"/>
            </div>
          </div>
        </div>
      </div>
  ) 
}
