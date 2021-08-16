import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import './ViagemV2.css'
import ListaInline from '../../ListaInline/ListaInline'
import MenuModViagem from '../../Menu/MenuModViagem/MenuModViagem';


export default function Viagem( {user, match}) {
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
    <div className="backViagem">
        <MenuModViagem user={user} match={match}/>
        <div className="divImgIntro">
          <p className="pLocal">{viagem.localizacao}</p>
          <Image width="400px" height="400px" src={viagem.imagemViagem} roundedCircle />
          <p className="pIntro">{viagem.descricao}</p>
          <div className="viajantes">
            <ListaInline userId={user.id} itens={viajantes} ifNone="Nenhum viajante cadastrado nessa viagem"
            itensEnvolvidos="Viajantes envolvidos" tituloAttr="nome" rota="viajantes"/>
          </div>
        </div>
    </div>
  )
}
