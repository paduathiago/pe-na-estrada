import Welcome from './Welcome/Welcome';
import Form from './Form/Form';

export default function Login({user,setUser}) {
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
          <Form setUser={setUser}/>
        </div>
      </section>
    </div>
    )
}