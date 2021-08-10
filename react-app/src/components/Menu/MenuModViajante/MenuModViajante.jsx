import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function MenuModViagem({match,user}){
  const history=useHistory();
  let autorizado=false
  if(user)
    if(user.isAdmin)
      autorizado=true
  
  function deleteViajante(){
    axios.delete(`/viajantes/${match.params.id}`).then(()=>history.push('/reloadUser/viajantes'))
    .catch((err)=>console.log(err.response.data));
    
  }
  if(autorizado)
    return <div className="MenuUD">
      <Link to={`/viajantes/${match.params.id}/editar`}>
        <button className="Editar">
          Editar como {user.nome}
        </button>
      </Link>
      <button onClick={deleteViajante}>
        Deletar viajante
      </button>
    </div>
  else
    return <div></div>
}