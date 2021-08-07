import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Viagem.css'

export default function Viagem( {match}) {
  const [viagem, setViagem] = useState(false);
  const [viajantes, setViajantes] = useState(false);
  useEffect(() => {
    console.log(match.params.id)
    axios.get(`/viagens/${match.params.id}`)
      .then( (res) => {
        setViagem(res.data.Viagem);
        setViajantes(res.data.Viajantes)
      })
      .catch( (err) => console.log(err.response) )
  },[match.params.id]);

  let listedViajantes = [];
  let loadedViajantes = [];
  const viagensToLista = (element, index) => ` ${element.nome},`
  const viagensToDiv = (element, index) => {
    console.log(element.id)
    const url=`/viagens/${element.id}`;
    return <div className="viajanteNome"><Link to={url}>{element}</Link></div>
  }
  let hasViajantes=false;
  if(viajantes) 
    if(viajantes.length)
      hasViajantes=true
  
  function viajantesEnvolvidos(){
    if(hasViajantes){
      listedViajantes = viajantes.map(viagensToLista)
      let listSize=listedViajantes.length
      let sizLast=listedViajantes[listSize-1].length
      listedViajantes[listSize-1]=listedViajantes[listSize-1].substr(0,sizLast-1);
      loadedViajantes = listedViajantes.map(viagensToDiv)
      return <p>Viajantes envolvidos:{loadedViajantes}.</p>
    } else {
      return <p>Nennum viajante cadastrado nesta viagem.</p>
      //Isso deve ser impossível! Toda viagem deveria ter pelo menos quem criou ela de
      //viajante.
    }
    
  }

  return (
    <div>
      <p>{viagem.localizacao}</p>
      <Image width="400px" height="400px" src={viagem.imagemViagem} roundedCircle />
      <p>{viagem.descricao}</p>
      <div className="viajantes">
        {viajantesEnvolvidos()}
      </div>
    </div>
  )
}
