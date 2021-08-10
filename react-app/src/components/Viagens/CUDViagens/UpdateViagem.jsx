
export default function UpdateViagem({match,user}){
  let autorizado=false
  if(user){
    if(user.isAdmin)
      autorizado=true
    for(let viag in user.Viagens)
    // eslint-disable-next-line
      if(user.Viagens[viag].id==match.params.id){
        autorizado=true
        break;
      }
    
  }
  
  if(!autorizado)
    return <p>Você não está autorizado a acessar essa página!</p>
  else
    return <div>ATUALIZAR</div>
  }