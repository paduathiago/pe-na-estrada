import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';

export default function UserReloader({setUser,match}){
  const history=useHistory();
  useEffect(() => {
    axios.get('/me')
      .then( (res) =>{
      let viajante=res.data.Viajante
      const viagens=res.data.Viagens
      viajante.Viagens=viagens
      setUser(viajante)
      if(match)
        history.push(`/${match.params.url}`)
      else
        history.push("/")
      })
      .catch( (err) => {
        setUser(false)
        if(match)
          history.push(`/${match.params.url}`)
        else
          history.push("/")
      })
  })
  return <div>
    <p>Carregando...</p>
  </div>
}