import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';


import ViajanteCard from '././ViajanteCard/ViajanteCard'
import Viajante from './Viajante/Viajante'

import './Viajantes.css';


export default function Viajantes() {
    
  const [viajantes, setViajantes] = useState(false);
  useEffect(() => {
    axios.get('/viajantes/?limit=15')
    .then( (res) => setViajantes(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);

  let loadedViajantes = [];
  const viajantesToCards = (element, index) => <ViajanteCard key={index} viajantes={element} />
  
  if(viajantes) loadedViajantes = viajantes.map(viajantesToCards)
  function viajantesList(){
    return <div>
    <p className="title">Viajantes</p>
    <div className="viajantes">
      {loadedViajantes}
    </div>
  </div>
  }
    return(
    <div className="pagina-viajantes">
      <Switch>
        <Route exact path={`/viajantes/`} component={viajantesList}/>
        <Route path={`/viajantes/:id`} component={Viajante}/>
      </Switch>
    </div>
  )
  
  
}

