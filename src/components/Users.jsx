import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {
  render() {
    const usersMap = this.props.users.map((user, i) => <UserItem key={i} user={user} />)
    return (
      <div className="user-grid">
        { usersMap }
      </div>
    )
  }
}
