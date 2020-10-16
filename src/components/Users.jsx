import React from "react";
import UserItem from "./UsersItem";
import Spinner from "./Spinner";

function Users(props) {
  const usersMap = props.users.map((user) => (
    <UserItem key={user.id} user={user} />
  ));

  if (props.loading) {
    return <Spinner />;
  } else {
    return <div className="user-grid">{usersMap}</div>;
  }
}

export default Users;
