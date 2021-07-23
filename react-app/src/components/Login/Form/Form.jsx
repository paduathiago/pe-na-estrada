import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function Form() {
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
                required
                />
            </div>
            <div id="Password">
              <input id="form-bottom" type="password"
                placeholder="Digite sua senha"
                name="password" required
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