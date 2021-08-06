import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import MenuDeslogado from '../MenuDeslogado/MenuDeslogado'

export default function Login() {

  return (
  <div className="Login">
    <MenuDeslogado />
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