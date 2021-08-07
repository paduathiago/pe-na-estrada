import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLogado.css'
import axios from 'axios';
import { useHistory } from 'react-router';
//MENU TEMPORARIO! ARRUMAR!!!
export default function Menu(){
  const history = useHistory();
  function logout(){
    axios.get('/logout').catch((err)=>console.log(err.response.data));
    history.push('/')
    window.location.reload();
  }

  return(
    <div className="Menu">
      <Link to='/'>
        <button>
          Home
        </button>
      </Link>
      <Link to='/viagens'>
        <button>
          Viagens
        </button>
      </Link>
      <Link to='/viajantes'>
        <button>
          Viajantes
        </button>
      </Link>
      <Link to='/me'>
        <button>
          Perfil
        </button> 
      </Link>
        <button onClick={logout}>
          Logout
        </button>
    </div>
  );
}