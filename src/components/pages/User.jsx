import React, { useEffect } from "react";

function User(props) {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    public_repos,
    public_gists,
    followers,
    followering,
    hireable,
  } = props.user;

  return <div>{name}</div>;
}

export default User;
