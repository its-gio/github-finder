import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar"
import Users from './components/Users';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const prom = await fetch("https://api.github.com/users")
    const res = await prom.json();

      console.log(res)

    this.setState({ users: res, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
