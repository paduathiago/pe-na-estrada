import axios from 'axios';
import { useState, useEffect } from 'react';
import ViagemCard from '../ViagemCard/ViagemCard'


export default function ViagensList(){
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get('/viagens/?limit=15')
    .then( (res) => setViagens(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);

  let loadedViagens = [];
  const viagensToCards = (element, index) => <ViagemCard key={index} viagens={element} />
  
  if(viagens) loadedViagens = viagens.map(viagensToCards)
  return <div>
    <p className="title">Viagens</p>
    <div className="viagens">
      {loadedViagens}
    </div>
  </div>
}