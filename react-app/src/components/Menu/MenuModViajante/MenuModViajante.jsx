import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../Botao.css';

export default function MenuModViagem({match,user}){
  const history=useHistory();
  let autorizado=false
  if(user)
    if(user.isAdmin)
      autorizado=true
  if(user.id==match.params.id)
    autorizado=true
  
  function deleteViajante(){
    if(match.params.id == user.id){
      axios.delete(`/viajantes/${match.params.id}`).then(()=>{
        axios.get('/logout').then(()=>{
          history.push('/reloadUser/')
        }).catch((err)=>console.log(err.response.data));
      })
      .catch((err)=>console.log(err.response.data));
   }
   else{
    axios.delete(`/viajantes/${match.params.id}`).then(()=>{
      history.push('/reloadUser/viajantes')
      }).catch((err)=>console.log(err.response.data));
   }
  }

  if(autorizado)
    return <div className="MenuUD">
      <Link to={`/viajantes/${match.params.id}/editar`}>
        <button className="Editar">
          Editar como {user.nome}
        </button>
      </Link>
      <button className="Delete" onClick={deleteViajante}>
        Deletar viajante
      </button>
    </div>
  else
    return <div></div>
}