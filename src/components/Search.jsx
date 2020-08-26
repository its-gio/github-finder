import React, { Component } from "react";

export class Search extends Component {
  state = {
    username: "",
    searched: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.username);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, searched: true });
  };

  clearSearch = (e) => {
    this.setState({ username: "", searched: false });
    this.props.initialGetUsers();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="username"
          placeholder="Enter Username..."
          value={this.state.username}
          type="text"
        />
        <input type="submit" value="Submit" />
        {this.state.searched ? (
          <input onClick={this.clearSearch} type="button" value="Clear" />
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default Search;
