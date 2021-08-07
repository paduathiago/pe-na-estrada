import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Viagem.css'

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

  let listedViajantes = [];
  let loadedViajantes = [];
  const viagensToLista = (element, index) => {
    return {
      nome:` ${element.nome},`,
      id: element.id,
    }
  }
  const viagensToDiv = (element, index) => {
    const url=`/viajantes/${element.id}`;
    return <div className="viajanteNome"><Link to={url}>{element.nome}</Link></div>
  }
  let hasViajantes=false;
  if(viajantes) 
    if(viajantes.length)
      hasViajantes=true
  
  function viajantesEnvolvidos(){
    if(hasViajantes){
      listedViajantes = viajantes.map(viagensToLista)
      let listSize=listedViajantes.length
      let sizLast=listedViajantes[listSize-1].nome.length
      listedViajantes[listSize-1].nome=listedViajantes[listSize-1].nome.substr(0,sizLast-1);
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
