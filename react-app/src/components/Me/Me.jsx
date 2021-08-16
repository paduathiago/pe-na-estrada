import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import axios from 'axios';
import ListaInline from '../ListaInline/ListaInline'
import MenuModMe from '../Menu/MenuModMe/MenuModMe';
import './Me.css'
import erroPrinter from '../../erroPrinter';

export default function Me({user}) {
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get(`/viajantes/${user.id}`)
      .then( (res) => {
      setViagens(res.data.Viagens);
      })
      .catch( erroPrinter )
    },[user.id]);
  if(!user)
    return <p>Você precisa estar logado para acessar essa página!</p>
  else
    return (
      <div className="backUser">
         <MenuModMe user={user}/>
        <div className="divImgIntro">
          <p className="pNome">{user.nome}</p>
          <p>
            <Image width="400px" height="400px" src={user.imagemPerfil} roundedCircle />
          </p>
          <p className="pIntro">{user.introducao}</p>

           <div className="viagens">
            <ListaInline itens={viagens} ifNone="Nenhuma viagem cadastrada."
            itensEnvolvidos="Viagens envolvido(a)" tituloAttr="localizacao" 
            rota="viagens"/>
          </div>
       </div>
      </div>
    )
}
