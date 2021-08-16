import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLogado.css'
import axios from 'axios';
import { useHistory } from 'react-router';
import erroPrinter from '../../../erroPrinter';

export default function Menu(){
  const history = useHistory();
  function logout(){
    axios.get('/logout').catch(erroPrinter);
    const home=encodeURIComponent("")
    history.push(`/reloadUser/${home}`)
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