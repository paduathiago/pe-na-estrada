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


function App() {
  axios.defaults.baseURL=process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  document.title="Rotas Worldwide"
  return (
    <div className="App">
      <Router>
        <ConditionalMenu/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/viagens">
            <Viagens />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/viajantes">
            <Viajantes />
          </Route>
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
