import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

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


  return (
    <div>
      <p>{viagem.localizacao}</p>
      <Image width="400px" height="400px" src={viagem.imagemViagem} roundedCircle />
      <p>{viagem.descricao}</p>
      <div>
        
      </div>
    </div>
  )
}
