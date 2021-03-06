import { Link } from 'react-router-dom'
import '../Botao.css'

export default function MenuModViagens({user}){
  if(user)
    return <div className="MenuCriar">
      <Link to='/viagens/criar'>
        <button className="Editar">
          Criar como {user.nome}
        </button>
      </Link>
    </div>
  else
    return <div></div>
}