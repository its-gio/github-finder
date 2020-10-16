import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="user-item">
      <div className="user-item--img-container">
        <img
          className="user-item--img-container__img"
          src={avatar_url}
          alt={`${login}`}
        />
      </div>
      <h3>{login}</h3>

      <Link to={`/user/${login}`}>
        <div className="user-item--btn">More &gt;</div>
      </Link>
    </div>
  );
};

export default UserItem;
