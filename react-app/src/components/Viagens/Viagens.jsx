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
  console.log(user)
  return(
  <div className="pagina-viagens">
    <Switch>
      <Route exact path={`/viagens/`} component={()=>ViagensList({user})}/>
      <Route exact path={`/viagens/criar`} component={()=>CreateViagem({user})}/>
      <Route path={`/viagens/:id/editar`} component={({match})=>UpdateViagem({match,user})}/>
      <Route path={`/viagens/:id/remover`} component={({match})=>RemoveViagem({match,user})}/>
      <Route path={`/viagens/:id`} component={Viagem}/>
    </Switch>
  </div>
  )
  
  
}

