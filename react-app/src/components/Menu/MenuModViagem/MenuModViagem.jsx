import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../Botao.css'

export default function MenuModViagens({match,user}){
  const history=useHistory();
  let autorizado=false
  if(user){
    if(user.isAdmin)
      autorizado=true
    else
      for(let viag in user.Viagens)
      // eslint-disable-next-line
        if(user.Viagens[viag].id==match.params.id){
          autorizado=true
          break;
        }
  }
  function deleteViagem(){
    axios.delete(`/viagens/${match.params.id}`).then(()=>history.push('/viagens'))
    .catch((err)=>console.log(err.response.data));
    
  }
  if(autorizado)
    return <div className="MenuCriar">
      <Link to={`/viagens/${match.params.id}/editar`}>
        <button className="Editar">
          Editar como {user.nome}
        </button>
      </Link>
      <button className="Delete" onClick={deleteViagem}>
        Deletar viagem
      </button>
    </div>
  else
    return <div></div>
}