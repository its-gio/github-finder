import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar"
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
