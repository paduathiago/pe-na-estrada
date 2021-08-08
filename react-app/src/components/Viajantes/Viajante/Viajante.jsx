import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Viajante.css'

export default function Viajante( {match}) {
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

  let listedViagens = [];
  let loadedViagens = [];
  const viagensToLista = (element, index) => {
    return {
      nome:` ${element.localizacao},`,
      id: element.id,
    }
  }
  const viagensToDiv = (element, index) => {
    const url=`/viagens/${element.id}`;
    return <div className="viagemNome"><Link to={url}>{element.nome}</Link></div>
  }
  let hasViagens=false;
  if(viagens) 
    if(viagens.length)
      hasViagens=true
  
  function viagensEnvolvidos(){
    if(hasViagens){
      listedViagens = viagens.map(viagensToLista)
      let listSize=listedViagens.length
      let sizLast=listedViagens[listSize-1].nome.length
      listedViagens[listSize-1].nome=listedViagens[listSize-1].nome.substr(0,sizLast-1);
      loadedViagens = listedViagens.map(viagensToDiv)
      return <p>Viagens envolvido(a):{loadedViagens}.</p>
    } else {
      return <p>Nenhuma viagem cadastrada para este(a) viajante(a).</p>
      //Isso deve ser impossível! Toda viajante deveria ter pelo menos quem criou ela de
      //viagem.
    }
    
  }

  return (
    <div>
      <p>{viajante.nome}</p>
      <Image width="400px" height="400px" src={viajante.imagemPerfil} roundedCircle />
      <p>{viajante.introducao}</p>
      <div className="viagens">
        {viagensEnvolvidos()}
      </div>
    </div>
  )
}
