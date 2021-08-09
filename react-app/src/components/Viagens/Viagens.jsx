import { 
  Switch,
  Route
} from 'react-router-dom';

import Viagem from './Viagem/Viagem'
import ViagensList from './ViagensList/ViagensList';

import './Viagens.css';


export default function Viagens({user}) {
  
  return(
  <div className="pagina-viagens">
    <Switch>
      <Route exact path={`/viagens/`} component={()=>ViagensList({user})}/>
      <Route path={`/viagens/:id`} component={Viagem}/>
    </Switch>
  </div>
  )
  
  
}

