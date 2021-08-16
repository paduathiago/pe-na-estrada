import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import erroPrinter from '../../../erroPrinter';

export default function MenuModViagem({user}){
  const history=useHistory();
  
  function deleteViajante(){
  axios.delete(`/viajantes/${user.id}`).then(()=>{
    axios.get('/logout').then(()=>{
      history.push('/reloadUser/')
    }).catch(erroPrinter);
  })
  .catch(erroPrinter);
  
  }
  return <div className="MenuUD">
    <Link to={`/viajantes/${user.id}/editar`}>
    <button className="Editar">
      Editar como {user.nome}
    </button>
    </Link>
    <button onClick={deleteViajante}>
    Deletar viajante
    </button>
  </div>
}