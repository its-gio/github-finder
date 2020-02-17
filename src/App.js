import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar"
import UserItem from './components/UserItem';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
