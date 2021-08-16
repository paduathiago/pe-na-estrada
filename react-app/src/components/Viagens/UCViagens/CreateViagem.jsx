import Logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './UCViagens.css'
import erroPrinter from '../../../erroPrinter';
import '../../Registrar/RegForm/RegForm.css';

import DropdownViajantesList from '../../Viajantes/DropdownViajantesList/DropdownViajantesList'

export default function CreateViagem({user}){
  
  const history=useHistory();
  const [msg,setMsg]=useState('Submeta os dados para criar a viagem:')
  const [localizacao,setLocal]=useState('')
  const [descricao,setDescricao]=useState('')
  const [imagemViagem,setImagem]=useState('')
  const [inicio,setInicio]=useState('')
  const [fim,setFinal]=useState('')
  const [viajantes,setViajantes]=useState('')
  const [viajantesBack,setViajantesBack]=useState('')
  useEffect(() => {
    axios.get('/viajantes/')
    .then( (res) => setViajantesBack(res.data) )
    .catch(erroPrinter)
  }, []);


  function handleChange(setProp){
    return (event)=>setProp(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    axios.post('/viagens',{localizacao,descricao,imagemViagem,inicio,fim,
      viajantes}).then(()=>{
        history.push(`/reloadUser/viagens`)
    })
    .catch((err)=>err.response?(
      err.response.data?setMsg(err.response.data)
      :
      setMsg(err.response)
    ):setMsg(err))
  } 
  if(!user)
    return <p>Você precisa estar logado para acessar essa página!</p>
  else
    return <div className="CreateViagem" onSubmit={handleSubmit}>
    <form method="POST">
      <div className="container2">
        <img src={Logo} 
            alt="logo"
            width="240px"
            height="220px"
          />
          <br />
        <p>{msg}</p>
        <div class="campos_registro" id="localizacao">
          <label htmlFor='localizacao'><p>Local:</p></label>
          <input class="formulario_registrar" type='text' placeholder="Digite o local viajado" name="localizacao"
            required onChange={handleChange(setLocal)} value={localizacao}
            />
        </div>
        <div class="campos_registro" id="descricao">
          <label htmlFor='descricao'><p>Descrição:</p></label>
          <textarea class="formulario_registrar" type='text' placeholder="Digite a descricao da viagem" name="descricao"
            required onChange={handleChange(setDescricao)} value={descricao}>
          </textarea>
        </div>
        <div class="campos_registro" id="imagemViagem">
          <label htmlFor='imagemViagem'><p>URL da imagem da viagem:</p></label>
          <input class="formulario_registrar" type='text' placeholder="Digite o URL pra uma imagem da viagem" 
          name="imagemViagem" onChange={handleChange(setImagem)} value={imagemViagem}
            />
        </div>
        <div class="campos_registro" id="inicio">
          <label htmlFor='inicio'><p>Data de início:</p></label>
          <input class="formulario_registrar" type='date' placeholder="Digite a data de início" name="inicio"
            required onChange={handleChange(setInicio)} value={inicio}
            />
        </div>
        <div class="campos_registro" id="fim">
          <label htmlFor='fim'><p>Data final:</p></label>
          <input class="formulario_registrar" type='date' placeholder="Digite a data fim" name="fim"
            required onChange={handleChange(setFinal)} value={fim}
            />
        </div>
        <div class="campos_registro" id="viajantes">
          <label htmlFor='viajantes'><p>Lista de viajantes:</p></label>
          <DropdownViajantesList lista={viajantesBack} setViajantes={setViajantes}/>
        </div>
        <button id='registrar_viagem' type="submit">Registrar viagem</button>
        <br className="unselectable" />
        <br className="unselectable" />
      </div>
    </form>
  </div>
}