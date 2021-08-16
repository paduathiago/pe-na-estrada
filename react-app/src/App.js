import './App.css';
import axios from 'axios'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Viagens from './components/Viagens/Viagens';
import Me from './components/Me/Me';
import Viajantes from './components/Viajantes/Viajantes'
import './App.css'
import ConditionalMenu from './components/Menu/ConditionalMenu'
import Footer from './components/Footer/Footer'
import Registrar from './components/Registrar/Registrar'
import { useState, useEffect } from 'react';
import UserReloader from './components/UserReloader/UserReloader';
import erroPrinter from './erroPrinter'

function App() {
  axios.defaults.baseURL=process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  document.title="Rotas Worldwide"

  const [user, setUser] = useState(false);
  useEffect(() => {
    axios.get('/me')
      .then( (res) =>{
        let viajante=res.data.Viajante
        const viagens=res.data.Viagens
        viajante.Viagens=viagens
        setUser(viajante) 
      })
      .catch( erroPrinter )
  }, []);
  return (
    <div className="App">
      <Router>
        <ConditionalMenu user={user}/>
        <Switch>
          <Route path="/login">
            <Login user={user}/>
          </Route>
          <Route path="/viagens">
            <Viagens user={user}/>
          </Route>
          <Route path="/me">
            <Me user={user}/>
          </Route>
          <Route path="/viajantes">
            <Viajantes user={user}/>
          </Route>
          <Route path="/registrar">
            <Registrar user={user}/>
          </Route>
          <Route path="/reloadUser/:url" component={({match})=>UserReloader({setUser,match})}/>
          <Route exact path="/reloadUser/" component={()=>UserReloader({setUser})}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
