import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import './Login.css'

export default function Login({user}) {
  if(user)
    return <p>Você já está logado!</p>
  else
    return (
    <div className="Login">
      <section className="container">
        <div className="left">
          <Welcome />
        </div>
        <div className="right">
          <Form/>
        </div>
      </section>
    </div>
    )
}