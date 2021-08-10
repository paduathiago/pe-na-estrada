import Logo from '../../../assets/logo.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function CreateViagem({user}){
  
  const history=useHistory();
  const [msg,setMsg]=useState('Submeta os dados para criar a viagem:')
  const [localizacao,setLocal]=useState('')
  const [descricao,setDescricao]=useState('')
  const [imagemViagem,setImagem]=useState('')
  const [inicio,setInicio]=useState('')
  const [fim,setFinal]=useState('')
  const [viajantes,setViajantes]=useState('')
  function handleChange(setProp){
    return (event)=>setProp(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    axios.post('/viagens',{localizacao,descricao,imagemViagem,inicio,fim,
      viajantes}).then(()=>{
      history.push('/')
    })
    .catch((err)=>setMsg(err.response.data))
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
        <div id="localizacao">
          <label htmlFor='localizacao'><p>Local:</p></label>
          <input type='text' placeholder="Digite o local viajado" name="localizacao"
            required onChange={handleChange(setLocal)} value={localizacao}
            />
        </div>
        <div id="descricao">
          <label htmlFor='descricao'><p>Descrição:</p></label>
          <input type='text' placeholder="Digite a descricao da viagem" name="descricao"
            required onChange={handleChange(setDescricao)} value={descricao}
            />
        </div>
        <div id="imagemViagem">
          <label htmlFor='imagemViagem'><p>URL da imagem da viagem:</p></label>
          <input type='text' placeholder="Digite o URL pra uma imagem da viagem" 
          name="imagemViagem" onChange={handleChange(setImagem)} value={imagemViagem}
            />
        </div>
        <div id="inicio">
          <label htmlFor='inicio'><p>Data de início:</p></label>
          <input type='text' placeholder="Digite a data de início" name="inicio"
            required onChange={handleChange(setInicio)} value={inicio}
            />
        </div>
        <div id="fim">
          <label htmlFor='fim'><p>Data final:</p></label>
          <input type='text' placeholder="Digite a data fim" name="fim"
            required onChange={handleChange(setFinal)} value={fim}
            />
        </div>
        <div id="viajantes">
          <label htmlFor='viajantes'><p>Lista de viajantes:</p></label>
          <input type='text' placeholder="Digite a lista de viajantes" name="viajantes"
            required onChange={handleChange(setViajantes)} value={viajantes}
            />
        </div>
        <button type="submit">Registrar viagem</button>
        <br className="unselectable" />
        <br className="unselectable" />
      </div>
    </form>
  </div>
}