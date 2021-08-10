import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';

export default function({setUser}){
  const history=useHistory();
  useEffect(() => {
    axios.get('/me')
      .then( (res) =>{
      let viajante=res.data.Viajante
      const viagens=res.data.Viagens
      viajante.Viagens=viagens
      setUser(viajante) 
      })
      .catch( (err) => console.log(err.response) )
  })
  return <div>
    <p>Carregando...</p>
  </div>
}