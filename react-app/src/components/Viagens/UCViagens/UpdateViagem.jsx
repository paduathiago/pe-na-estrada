import Logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './UCViagens.css'
import '../../Registrar/RegForm/RegForm';
import erroPrinter from '../../../erroPrinter';

import DropdownViajantesList from '../../Viajantes/DropdownViajantesList/DropdownViajantesList'

export default function UpdateViagem({match,user}){
  const [viajantesNomes,setViajantesNomes]=useState([])

  const history=useHistory();
  const [msg,setMsg]=useState('Submeta os novos dados da viagem:')
  const [localizacao,setLocal]=useState('')
  const [descricao,setDescricao]=useState('')
  const [imagemViagem,setImagem]=useState('')
  const [inicio,setInicio]=useState('')
  const [fim,setFinal]=useState('')
  const [addViajantes,setAddViajantes]=useState('')
  const [remViajantes,setRemViajantes]=useState('')


  const [viajantes,setViajantes]=useState('')
  const [viajantesBack1,setViajantesBack1]=useState('')
  const [viajantesBack2,setViajantesBack2]=useState('')


  useEffect(() => {
    axios.get('/viajantes/')
    .then( (res) =>{ 
      setViajantesBack1(res.data) 
      setViajantesBack2(res.data) 
    })
    .catch(erroPrinter)
  }, []);

  useEffect(() => {
    axios.get(`/viagens/${match.params.id}`)
      .then( (res) => {
        const viagem=res.data.Viagem
        setLocal(viagem.localizacao)
        setDescricao(viagem.descricao)
        setImagem(viagem.imagemViagem)
        setInicio(viagem.inicio)
        setFinal(viagem.fim)
        let viajatess=[]
        let viajantesNomes=[]
        for(let v in res.data.Viajantes){
          viajatess[v]=res.data.Viajantes[v].id
          viajantesNomes[v]=res.data.Viajantes[v].nome+", "
        }
        //setViajantes("[ "+viajatess+" ]")
        setViajantesNomes(viajantesNomes)
      })
      .catch( erroPrinter )
  },[match.params.id]);
  let autorizado=false
  if(user){
    if(user.isAdmin)
      autorizado=true
    else
      for(let viag in user.Viagens)
      // eslint-disable-next-line
        if(user.Viagens[viag].id==match.params.id){
          autorizado=true
          break;
        }
    
  }
  if(!autorizado)
    return <p>Você não está autorizado a acessar essa página!</p>
  else{
    function handleChange(setProp){
      return (event)=>setProp(event.target.value)
    }
    function handleSubmit(event){
      event.preventDefault()
      console.log(addViajantes)
      console.log(remViajantes)
      axios.put(`/viagens/${match.params.id}`,{localizacao,descricao,imagemViagem,inicio,fim,
        addViajantes,remViajantes}).then(()=>{
          history.push(`/viagens/${match.params.id}`)
          //window.location.reload()
      })
      .catch((err)=>err.response?(
        err.response.data?setMsg(err.response.data)
        :
        setMsg(err.response)
      ):setMsg(err))
    }
    return <div className="UpdateViagem" onSubmit={handleSubmit}>
      <form method="PUT">
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
              onChange={handleChange(setLocal)} value={localizacao}
              />
          </div>
          <div class="campos_registro" id="descricao">
            <label htmlFor='descricao'><p>Descrição:</p></label>
            <textarea class="formulario_registrar" type='text' placeholder="Digite a descricao da viagem" name="descricao"
              onChange={handleChange(setDescricao)} value={descricao}>
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
            <input class="formulario_registrar" type='text' placeholder="Digite a data de início" name="inicio"
              onChange={handleChange(setInicio)} value={inicio}
              />
          </div>
          <div class="campos_registro" id="fim">
            <label htmlFor='fim'><p>Data final:</p></label>
            <input class="formulario_registrar" type='text' placeholder="Digite a data fim" name="fim"
              onChange={handleChange(setFinal)} value={fim}
              />
          </div>
          <p>{viajantesNomes}</p>
          <div id="viajantesAdd">
            <label htmlFor='viajantesAdd'><p>Lista de viajantes a adicionar:</p></label>
            <DropdownViajantesList lista={viajantesBack1} setViajantes={setAddViajantes}/>
          </div>
          <div id="viajantesRem">
            <label htmlFor='viajantesRem'><p>Lista de viajantes a remover:</p></label>
            <DropdownViajantesList lista={viajantesBack2} setViajantes={setRemViajantes}/>
          </div>
          <button type="submit">Editar viagem</button>
          <br className="unselectable" />
          <br className="unselectable" />
        </div>
      </form>
    </div>
    }
  }