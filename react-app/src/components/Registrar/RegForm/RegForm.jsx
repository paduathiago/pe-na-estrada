import Logo from '../../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './RegForm.css';

export default function RegForm() {
    const history=useHistory();
    const [email,setEmail] = useState('')//As aspas são o estado inicial!
    const [senha, setSenha] = useState('')
    const [imagemPerfil,setImagemPerfil]=useState('')
    const [nome,setNome]=useState('')
    const [introducao,setIntroducao]= useState('')
    const [msg,setMsg]=useState('Submeta seus dados para acessar sua conta:')

    function handleChange(setProp){
      return (event)=>setProp(event.target.value)
    }
    const isAdmin=false;
    function handleSubmit(event){
        event.preventDefault()
        function postar(img){
          const imagemPerfil=img
          axios.post('/viajantes',{email,senha,imagemPerfil,nome,introducao,isAdmin}).then(()=>{
            history.push('/login')
          })
          .catch((err)=>err.response?(
            err.response.data?setMsg(err.response.data)
            :
            setMsg(err.response)
          ):setMsg(err))
        }
        const imgAlt="http://robohash.org/"+encodeURIComponent(`${nome}`)
        if(imagemPerfil===''){
          postar(imgAlt)
        }else{
          postar(imagemPerfil)
        }
    }

    return (
      <div className="Form" onSubmit={handleSubmit}>
        <form method="POST">
          <div className="container2">
            <img src={Logo} 
                alt="logo"
                width="240px"
                height="220px"
              />
              <br />
            <p>{msg}</p>
            <div class="campos_registro" id="nome">
              <label htmlFor='nome'><p>Nome:</p></label>
              <input class="formulario_registrar" type='text' placeholder="Digite seu nome" name="nome"
                required onChange={handleChange(setNome)} value={nome}
                />
            </div>
            <div class="campos_registro">
              <label htmlFor='introducao'><p>Introdução:</p></label>
              <input class="formulario_registrar" type='text' placeholder="Digite sua introducao" name="introducao"
                required onChange={handleChange(setIntroducao)} value={introducao}
                />
            </div>
            <div class="campos_registro" id="imagemPerfil">
              <label htmlFor='imagemPerfil'><p>URL da imagem de perfil:</p></label>
              <input class="formulario_registrar" type='text' placeholder="Digite o URL pra sua imagem de perfil" 
               name="imagemPerfil" onChange={handleChange(setImagemPerfil)} value={imagemPerfil}
                />
            </div>
            <div class="campos_registro" id="Email">
              <label htmlFor='email'><p>E-mail:</p></label>
              <input class="formulario_registrar" type='text' placeholder="Digite seu email" name="email"
                required onChange={handleChange(setEmail)} value={email}
                />
            </div>
            <div class="campos_registro" id="Password">
              <label htmlFor='password'><p>Senha:</p></label>
              <input class="formulario_registrar" id="form-bottom"
                placeholder="Digite sua senha"
                name="password" required
                onChange={handleChange(setSenha)} value={senha}
                />
            <br className="unselectable" />
            </div>
            <button type="submit">Registrar</button>
            <br className="unselectable" />
            <br className="unselectable" />
          </div>
        </form>
      </div>
    )
  }