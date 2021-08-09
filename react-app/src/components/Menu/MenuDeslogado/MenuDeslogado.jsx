import React from 'react'
import { Link } from 'react-router-dom'
import './MenuDeslogado.css'

export default function Menu(){
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
      <Link to="/login">
        <button>
          Login
        </button>
      </Link>
      <Link to="/registrar">
        <button>
          Registrar
        </button>
      </Link>
    </div>
  );
}