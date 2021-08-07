import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import './Viagem.css'

export default function Viagem( {match}) {
  const [viagem, setViagem] = useState(false);
  const [viajantes, setViajantes] = useState(false);
  useEffect(() => {
    axios.get(`/viagens/2`)
      .then( (res) => {
        setViagem(res.data.Viagem);
        setViajantes(res.data.Viajantes)
      })
      .catch( (err) => console.log(err.response) )
  }, []);

  let listedViajantes = [];
  let loadedViajantes = [];
  const viagensToLista = (element, index) => ` ${element.nome},`
  const viagensToDiv = (element, index) => 
    <div className="viajanteNome">{element}</div>
  
  if(viajantes) {
    listedViajantes = viajantes.map(viagensToLista)
    let listSize=listedViajantes.length
    let sizLast=listedViajantes[listSize-1].length
    listedViajantes[listSize-1]=listedViajantes[listSize-1].substr(0,sizLast-1);
    loadedViajantes = listedViajantes.map(viagensToDiv)
  }


  return (
    <div>
      <p>{viagem.localizacao}</p>
      <Image width="400px" height="400px" src={viagem.imagemViagem} roundedCircle />
      <p>{viagem.descricao}</p>
      <div className="viajantes">
        <p>Viajantes envolvidos:{loadedViajantes}.</p>
      </div>
    </div>
  )
}
