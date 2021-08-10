import { Link } from 'react-router-dom'

export default function MenuModViagens({match,user}){
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
  if(autorizado)
    return <div className="MenuCriar">
      <Link to={`/viagens/${match.params.id}/editar`}>
        <button className="Criar">
          Editar como {user.nome}
        </button>
      </Link>
      <button onClick="window.alert('CERTEZA BIXO?')">
        Deletar viagem
      </button>
    </div>
  else
    return <div></div>
}