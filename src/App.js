import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar"
import Users from './components/Users';
import Search from './components/Search';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const prom = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const res = await prom.json();

    this.setState({ users: res, loading: false });
  }

  searchUser = async (username) => {
    this.setState({ loading: true })
    const prom = await fetch(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const res = await prom.json();

    this.setState({ users: res.items, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchUser={this.searchUser} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
