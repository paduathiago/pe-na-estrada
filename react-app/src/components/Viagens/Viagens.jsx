import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MenuDeslogado from '../MenuDeslogado/MenuDeslogado';


import ViagemCard from '././ViagemCard/ViagemCard'
import Viagem from './Viagem/Viagem'
import Menu from '../Menu/Menu';

import './Viagens.css';

export default function Viagens() {
    
  const [viagens, setViagens] = useState(false);
  useEffect(() => {
    axios.get('/viagens/?limit=15')
    .then( (res) => setViagens(res.data) )
    .catch( (err) => console.log(err.response) )
  }, []);

  const [user, setUser] = useState(false);
  useEffect(() => {
    axios.get('/me')
      .then( (res) => setUser(res.data) )
      .catch( (err) => console.log(err.response) )
  }, []);
  
  let loadedViagens = [];
  const viagensToCards = (element, index) => <ViagemCard key={index} viagens={element} />
  
  if(viagens) loadedViagens = viagens.map(viagensToCards)

  if(user){ 
    return(
      <div className="pagina-viagens">
      <Menu />

      <p className="title">Viagens</p>
      <div className="viagens">
        {loadedViagens}
      </div>
      <Router>
        <Switch>
          <Route path="/viagem/:id">
            <Viagem />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  }
  else{
    return(
      <div className="pagina-viagens">
      <MenuDeslogado />

      <p className="title">Viagens</p>
      <div className="viagens">
        {loadedViagens}
      </div>
      <Router>
        <Switch>
          <Route path="/viagem/:id">
            <Viagem />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  }
  
}