import axios from 'axios';
import './Viagens.css';
import ViagemCard from '././ViagemCard/ViagemCard'
import { useState, useEffect } from 'react';

export default function Viagens() {
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get('/viagens/?limit=6')
    .then( (res) => setViagens(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);
  console.log(viagens) 

  let loadedViagens = [];
  const viagensToCards = (element, index) => <ViagemCard key={index} viagens={element} />

  if(viagens) loadedViagens = viagens.map(viagensToCards); console.log(loadedViagens)
  return(
    <div className="viagens">
      {loadedViagens}
    </div>
  )
}