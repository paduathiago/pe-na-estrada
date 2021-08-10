import Logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UpdateViagem({match,user}){
  const history=useHistory();
  const [msg,setMsg]=useState('Submeta os novos dados da viagem:')
  const [localizacao,setLocal]=useState('')
  const [descricao,setDescricao]=useState('')
  const [imagemViagem,setImagem]=useState('')
  const [inicio,setInicio]=useState('')
  const [fim,setFinal]=useState('')
  const [viajantes,setViajantes]=useState('')
  const [addViajantes,setAddViajantes]=useState('[ ]')
  const [remViajantes,setRemViajantes]=useState('[ ]')
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
        for(let v in res.data.Viajantes)
          viajatess[v]=res.data.Viajantes[v].id
        setViajantes("[ "+viajatess+" ]")
      })
      .catch( (err) => console.log(err.response) )
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
      axios.put(`/viagens/${match.params.id}`,{localizacao,descricao,imagemViagem,inicio,fim,
        addViajantes,remViajantes}).then(()=>{
          history.push(`/viagens/${match.params.id}`)
          //window.location.reload()
      })
      .catch((err)=>setMsg(err.response.data))
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
            <p>Lista de viajantes:{viajantes}</p>
          </div>
          <div id="addViajantes">
            <label htmlFor='addViajantes'><p>Viajantes a adicionar:</p></label>
            <input type='text' placeholder="Digite os viajantes a adicionar" name="addViajantes"
              required onChange={handleChange(setAddViajantes)} value={addViajantes}
              />
          </div>
          <div id="remViajantes">
            <label htmlFor='remViajantes'><p>Viajantes a remover:</p></label>
            <input type='text' placeholder="Digite os viajantes a remover" name="remViajantes"
              required onChange={handleChange(setRemViajantes)} value={remViajantes}
              />
          </div>
          <button type="submit">Editar viagem</button>
          <br className="unselectable" />
          <br className="unselectable" />
        </div>
      </form>
    </div>
    }
  }