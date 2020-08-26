import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";

class App extends React.Component {
  state = {
    users: [],
    alert: null,
    loading: false,
  };

  componentDidMount() {
    this.initialGetUsers();
  }

  initialGetUsers = async () => {
    this.setState({ loading: true });
    const prom = await fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const res = await prom.json();

    this.setState({ users: res, loading: false });
  };

  searchUser = async (username) => {
    this.setState({ loading: true });
    const prom = await fetch(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const res = await prom.json();

    this.setState({ users: res.items, loading: false });
  };

  setAlert = (msg) => {
    this.setState({ alert: msg });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUser={this.searchUser}
          initialGetUsers={this.initialGetUsers}
          setAlert={this.setAlert}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
