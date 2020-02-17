import React from 'react'

const UserItem  = ({user : {avatar_url, login, url}}) => {
    return (
      <div className="user-item">
        <div className="user-item--img-container">
          <img className="user-item--img-container__img" src={avatar_url} alt={`${login}`} />
        </div>
        <h3>{login}</h3>

        <div className="user-item--moreBtn-container">
          <a className="user-item--moreBtn-container__btn" href={url}>More ></a>
        </div>
      </div>
    )
}

export default UserItem;