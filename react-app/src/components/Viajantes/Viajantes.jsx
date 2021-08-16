import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';


import ViajanteCard from '././ViajanteCard/ViajanteCard'
import Viajante from './Viajante/Viajante'
import UpdateViajante from './UViajantes/UpdateViajante'
import erroPrinter from '../../erroPrinter';

import './Viajantes.css';


export default function Viajantes({user}) {
  const [viajantes, setViajantes] = useState(false);
  useEffect(() => {
    axios.get('/viajantes/?limit=15')
    .then( (res) => setViajantes(res.data) )
    .catch( erroPrinter )
  }, []);

  let loadedViajantes = [];
  const viajantesToCards = (element, index) => <ViajanteCard key={index} viajantes={element} user = {user} />
  
  if(viajantes) loadedViajantes = viajantes.map(viajantesToCards)
  function viajantesList(){
    if(!user)
      return <p>Você precisa estar logado para acessar essa página!</p>
    else
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
      <Route path={`/viajantes/:id/editar`} component={({match})=>UpdateViajante({match,user})}/>
      <Route path={`/viajantes/:id`} component={({match})=>Viajante({match,user})}/>
    </Switch>
  </div>
  )
  
  
}

