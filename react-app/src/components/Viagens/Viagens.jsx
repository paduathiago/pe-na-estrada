import { 
  Switch,
  Route
} from 'react-router-dom';

import Viagem from './Viagem/Viagem'
import ViagensList from './ViagensList/ViagensList';
import CreateViagem from './UCViagens/CreateViagem'
import UpdateViagem from './UCViagens/UpdateViagem';

import './Viagens.css';


export default function Viagens({user}) {
  return(
  <div className="pagina-viagens">
    <Switch>
      <Route exact path={`/viagens/`} component={()=>ViagensList({user})}/>
      <Route exact path={`/viagens/criar`} component={()=>CreateViagem({user})}/>
      <Route path={`/viagens/:id/editar`} component={({match})=>UpdateViagem({match,user})}/>
      <Route path={`/viagens/:id`} component={({match})=>Viagem({match,user})}/>
    </Switch>
  </div>
  )
  
  
}

