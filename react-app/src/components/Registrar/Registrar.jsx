import React from 'react'
import './Registrar.css'
import RegForm from './RegForm/RegForm'
import RegWelcome from './RegWelcome/RegWelcome'

export default function Registrar({user}){
  if(user)
    return <p>Faça logout antes de criar uma nova conta!</p>
  else
    return <div className="Registrar">
      <section className="container">
        <div className="left">
          <RegWelcome />
        </div>
        <div className="right">
          <RegForm />
        </div>
      </section>
    </div>
}