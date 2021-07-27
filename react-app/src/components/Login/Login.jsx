import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import Menu from '../Menu/Menu'

export default function Login() {

  return (
  <div className="Login">
    <Menu />
    <section className="container">
      <div className="left">
        <Welcome />
      </div>
      <div className="right">
        <Form />
      </div>
    </section>
  </div>
  )
}