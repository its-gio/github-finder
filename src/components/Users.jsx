import React from 'react';
import UserItem from './UserItem';
import Spinner from "./Spinner";

function Users(props) {
    const usersMap = props.users.map((user, i) => <UserItem key={user.id} user={user} />)

    if(props.loading) {
      return <Spinner />
    } else {
      return (
        <div className="user-grid">
          { usersMap }
        </div>
      )
    }
}

export default Users;