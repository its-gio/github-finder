import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/pages/About";
import User from "./components/pages/User";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    userRepos: [],
    alert: null,
    loading: false,
  };

  clearSearch = () => this.setState({ users: [] });

  searchUser = async (username) => {
    this.setState({ loading: true });
    const prom = await fetch(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const res = await prom.json();

    this.setState({ users: res.items, loading: false });
  };

  getUser = async (user) => {
    this.setState({ loading: true });
    const prom = await fetch(
      `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const res = await prom.json();

    this.setState({ user: res, loading: false });
  };

  getUserRepos = async (user) => {
    this.setState({ loading: true });
    const prom = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    const res = await prom.json();

    this.setState({ userRepos: res, loading: false })
  }

  setAlert = (msg) => {
    this.setState({ alert: msg });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { alert, loading, users, user, userRepos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route
              path="/about"
              render={() => (
                <>
                  <About />
                </>
              )}
            />
            <Route
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  userRepos={userRepos}
                  loading={loading}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <>
                  <Search
                    searchUser={this.searchUser}
                    clearSearch={this.clearSearch}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
