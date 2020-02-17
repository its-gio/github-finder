import React from 'react'

const UserItem  = ({user : {img, name, link}}) => {
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

export default UserItem;