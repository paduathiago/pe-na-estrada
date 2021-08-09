import { 
  Switch,
  Route
} from 'react-router-dom';

import Viagem from './Viagem/Viagem'
import ViagensList from './ViagensList/ViagensList';
import CreateViagem from './CUDViagens/CreateViagem'
import RemoveViagem from './CUDViagens/RemoveViagem'
import UpdateViagem from './CUDViagens/UpdateViagem';

import './Viagens.css';


export default function Viagens({user}) {
  
  return(
  <div className="pagina-viagens">
    <Switch>
      <Route exact path={`/viagens/`} component={()=>ViagensList({user})}/>
      <Route exact path={`/viagens/criar`} component={CreateViagem}/>
      <Route path={`/viagens/:id/editar`} component={UpdateViagem}/>
      <Route path={`/viagens/:id/remover`} component={RemoveViagem}/>
      <Route path={`/viagens/:id`} component={Viagem}/>
    </Switch>
  </div>
  )
  
  
}

