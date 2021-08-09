import React from 'react'
import './Registrar.css'
import RegForm from './RegForm/RegForm'
import RegWelcome from './RegWelcome/RegWelcome'

export default function Registrar(){
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