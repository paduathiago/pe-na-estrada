import Logo from '../../../assets/logo.png'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UpdateViajante({match,user}){
  const history=useHistory();
  const [msg,setMsg]=useState('Submeta os novos dados do viajante:')
  const [nome,setNome]=useState('')
  const [email,setEmail]=useState('')
  const [isAdmin,setIsAdmin]=useState('')
  const [introducao,setIntroducao]=useState('')
  const [imagemPerfil,setImagemPerfil]=useState('')
  const [senha,setSenha]=useState('')
  useEffect(() => {
  axios.get(`/viajantes/${match.params.id}`)
    .then( (res) => {
    const viajante=res.data.Viajante
    setNome(viajante.nome)
    setEmail(viajante.email)
    setIsAdmin(viajante.isAdmin)
    setIntroducao(viajante.introducao)
    setImagemPerfil(viajante.imagemPerfil)
    })
    .catch( (err) => console.log(err.response) )
  },[match.params.id]);
  let autorizado=false
  if(user)
    if(user.id==match.params.id)
      autorizado=true
  if(!autorizado)
    return <p>Você não está autorizado a acessar essa página!</p>
  else{
  function handleChange(setProp){
    return (event)=>setProp(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    if(!senha)
      axios.put(`/viajantes/${match.params.id}`,{nome,email,isAdmin,introducao,imagemPerfil,
      }).then(()=>{
        history.push(`/viajantes/${match.params.id}`)
      })
      .catch((err)=>setMsg(err.response.data))
    else
      axios.put(`/viajantes/${match.params.id}`,{nome,email,isAdmin,introducao,imagemPerfil,
      senha}).then(()=>{
        history.push(`/viajantes/${match.params.id}`)
      })
      .catch((err)=>setMsg(err.response.data))
  }
    return <div className="UpdateViajante" onSubmit={handleSubmit}>
  <form method="POST">
        <div className="container2">
        <img src={Logo} 
          alt="logo"
          width="240px"
          height="220px"
          />
          <br />
        <p>{msg}</p>
        <div id="nome">
          <label htmlFor='nome'><p>Nome:</p></label>
          <input type='text' placeholder="Digite seu nome" name="nome"
          required onChange={handleChange(setNome)} value={nome}
          />
        </div>
        <div id="introducao">
          <label htmlFor='introducao'><p>Introdução:</p></label>
          <input type='text' placeholder="Digite sua introducao" name="introducao"
          required onChange={handleChange(setIntroducao)} value={introducao}
          />
        </div>
        <div id="imagemPerfil">
          <label htmlFor='imagemPerfil'><p>URL da imagem de perfil:</p></label>
          <input type='text' placeholder="Digite o URL pra sua imagem de perfil" 
          name="imagemPerfil" onChange={handleChange(setImagemPerfil)} value={imagemPerfil}
          />
        </div>
        <div id="isAdmin">
          <label htmlFor='isAdmin'><p>É admin?:</p></label>
          <input type='text' placeholder="Digite se o usuário deve ser admin" name="isAdmin"
          required onChange={handleChange(setIsAdmin)} value={isAdmin}
          />
        </div>
        <div id="Email">
          <label htmlFor='email'><p>E-mail:</p></label>
          <input type='text' placeholder="Digite seu email" name="email"
          required onChange={handleChange(setEmail)} value={email}
          />
        </div>
        <div id="Password">
          <label htmlFor='password'><p>Senha:</p></label>
          <input id="form-bottom"
          placeholder="Senha (vazio para não mudar)"
          name="password"
          onChange={handleChange(setSenha)} value={senha}
          />
          <br className="unselectable" />
        </div>
        <button type="submit">Editar perfil</button>
        <br className="unselectable" />
        <br className="unselectable" />
        </div>
      </form>
    </div>
  }
}