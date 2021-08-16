import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import '../Botao.css'

export default function MenuModViagem({user}){
  const history=useHistory();
  
  function deleteViajante(){
  axios.delete(`/viajantes/${user.id}`).then(()=>{
    axios.get('/logout').then(()=>{
      history.push('/reloadUser/')
    }).catch((err)=>console.log(err.response.data));
  })
  .catch((err)=>console.log(err.response.data));
  
  }
  return <div className="MenuUD">
    <Link to={`/viajantes/${user.id}/editar`}>
    <button className="Editar">
      Editar como {user.nome}
    </button>
    </Link>
    <button className="Delete" onClick={deleteViajante}>
    Deletar viajante
    </button>
  </div>
}