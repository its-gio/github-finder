import React, { useEffect } from "react";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function User(props) {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    public_repos,
    public_gists,
    followers,
    following,
    hireable,
  } = props.user;

  if (props.loading) return <Spinner />

  return (
    <div className="single-user">
      <p className="single-user--hireable">
        <strong>Hirable:</strong>
        { hireable ? <FaCheckCircle fill="green" /> : <FaTimesCircle fill="red" /> }
      </p>

      <div className="single-user--info">
        <div className="single-user--info__personal">
          <div className="avatar-container">
            <img src={avatar_url} alt={`${name}'s github avatar`}/>
          </div>
          <h3>{name}</h3>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Public Repos:</strong> {public_repos}</p>
          <p><strong>Public Repos:</strong> {public_gists}</p>
          <p><strong>Followers:</strong> {followers}</p>
          <p><strong>Followering:</strong> {following}</p>
        </div>

        <div className="single-user--info__connect">
          { bio && <p><strong>Bio:</strong><br/>{bio}</p> }

          { html_url && <a href={html_url} className="user-website">Github Profile</a> }

          { login && <p><strong>Username:</strong> {login}</p> }

          { company && <p><strong>Company:</strong> {company}</p> }

          { blog && <p><strong>Website:</strong> <a href={`http://${blog}`}>{blog}</a></p> }
        </div>
      </div>
    </div>
  )}

export default User;
