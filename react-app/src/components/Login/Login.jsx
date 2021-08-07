import Welcome from './Welcome/Welcome';
import Form from './Form/Form';

export default function Login() {
  return (
  <div className="Login">
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