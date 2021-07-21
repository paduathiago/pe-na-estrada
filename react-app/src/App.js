import logoBatata from './logoBatata.png';
import './App.css';
import React from 'react'


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      colors:["#ff0000","#aaaa00","#00ff00","#00aaaa","#0000ff"]
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      id:(this.state.id+1)%5
    });
  }
  render() {
    return (
      <div>
        <font color={this.state.colors[this.state.id]}>BATATA FRITA!.</font>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBatata} className="App-logo" alt="logo" />
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
