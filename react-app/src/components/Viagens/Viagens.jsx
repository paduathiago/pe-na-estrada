import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';


import ViagemCard from '././ViagemCard/ViagemCard'
import Viagem from './Viagem/Viagem'

import './Viagens.css';


export default function Viagens() {
    
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get('/viagens/?limit=15')
    .then( (res) => setViagens(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);

  let loadedViagens = [];
  const viagensToCards = (element, index) => <ViagemCard key={index} viagens={element} />
  
  if(viagens) loadedViagens = viagens.map(viagensToCards)
  function viagensList(){
    return <div>
    <p className="title">Viagens</p>
    <div className="viagens">
      {loadedViagens}
    </div>
  </div>
  }
    return(
    <div className="pagina-viagens">
      <Switch>
        <Route exact path={`/viagens/`} component={viagensList}/>
        <Route path={`/viagens/:id`} component={Viagem}/>
      </Switch>
    </div>
  )
  
  
}

