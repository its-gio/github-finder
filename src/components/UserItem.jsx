import React, { Component } from 'react'

export default class UserItem extends Component {
  state = {
    img: "https://avatars3.githubusercontent.com/u/9650600",
    name: "its-gio",
    link: "https://github.com/its-gio"
  }


  render() {
    const  { img, name, link } = this.state
    return (
      <div className="user-item">
        <div className="user-item--img-container">
          <img className="user-item--img-container__img" src={img} alt={`${name}`} />
        </div>
        <h3>{name}</h3>

        <div className="user-item--moreBtn-container">
          <a className="user-item--moreBtn-container__btn" href={link}>More ></a>
        </div>
      </div>
    )
  }
}
