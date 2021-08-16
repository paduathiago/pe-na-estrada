import Logo from '../../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './Form.css';
import erroPrinter from '../../../erroPrinter';

export default function Form() {
    const history=useHistory();
    const [email,setEmail] = useState('')//As aspas são o estado inicial!
    const [senha, setSenha] = useState('')
    const [msg,setMsg]=useState('Submeta seus dados para acessar sua conta:')

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handleSenhaChange(event){
        setSenha(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        axios.post('/login',{email,senha}).then((res)=>{
          axios.get('/me')
          .then( (res) => {
            let viajante=res.data.Viajante
            const viagens=res.data.Viagens
            viajante.Viagens=viagens
            history.push('/reloadUser/me')
          })
          .catch( erroPrinter )
          
        })
        .catch((err)=>err.response?(
            err.response.data?setMsg(err.response.data)
            :
            setMsg(err.response)
          ):setMsg(err))
    }

    return (
      <div className="Form" onSubmit={handleSubmit}>
        <form method="POST">
          <div className="container2">
            <img className="imagem" src={Logo} 
                alt="logo"
                width="240px"
                height="220px"
              />
              <br />
            <p>{msg}</p>
            <div id="Email">
              <label htmlFor='email'><p>Login:</p></label>
              <input type='text' placeholder="Digite seu email" name="email"
                required onChange={handleEmailChange} value={email}
                />
            </div>
            <div id="Password">
              <label htmlFor='password'><p>Senha:</p></label>
              <input id="form-bottom" type="password"
                placeholder="Digite sua senha"
                name="password" required
                onChange={handleSenhaChange} value={senha}
                />
            </div>
            <br className="unselectable" />
            <button type="submit">Entrar</button>
            <br className="unselectable" />
            <br className="unselectable" />

          </div>
        </form>
      </div>
    )
  }