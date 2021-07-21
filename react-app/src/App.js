import './App.css';
import axios from 'axios'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import './App.css'

function App() {
  axios.defaults.baseURL=process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
