import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {
  state = {
    users: [
      {
        img: "https://avatars3.githubusercontent.com/u/9650600",
        name: "its-gio",
        link: "https://github.com/its-gio"
      },
      {
        img: "https://avatars0.githubusercontent.com/u/11222980",
        name: "jraleman",
        link: "https://github.com/jraleman"
      },
      {
        img: "https://avatars0.githubusercontent.com/u/5869382",
        name: "jeeem",
        link: "https://github.com/jeeem"
      },
      {
        img: "https://avatars1.githubusercontent.com/u/26103179?s=460&v=4",
        name: "dgerard42",
        link: "https://github.com/dgerard42"
      },
    ]
  }

  render() {
    const usersMap = this.state.users.map((user, i) => <UserItem key={i} user={user} />)
    return (
      <div className="user-grid">
        { usersMap }
      </div>
    )
  }
}
