import React, { Component } from 'react'

export class Search extends Component {
  state = {
    username: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.username);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="username" placeholder="Enter Username..." value={this.state.username} type="text"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Search
