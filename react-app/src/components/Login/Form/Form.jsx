import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {
    const [email,setEmail] = useState('')//As aspas são o estado inicial!
    const [senha, setSenha] = useState('')

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handleSenhaChange(event){
        setSenha(event.target.value)
    }

    return (
      <div className="Form">
        <form method="POST">
          <div className="container2">
            <img src={Logo} 
                alt="logo"
                width="240px"
                height="220px"
              />
              <br />
            <div id="Email">
              <label htmlFor='email'><p>Login:</p></label>
              <input type='text' placeholder="Digite seu email" name="email"
                required onChange={handleEmailChange} value={email}
                />
            </div>
            <div id="Password">
              <input id="form-bottom" type="password"
                placeholder="Digite sua senha"
                name="password" required
                onChange={handleSenhaChange} value={senha}
                />
              <span className="password">
                <Link to="/">
                  Esqueci minha senha
                </Link>
              </span>
            </div>
            <button type="submit">Entrar</button>
            <br className="unselectable" />
            <br className="unselectable" />
          </div>
        </form>
      </div>
    )
  }