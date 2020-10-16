import React from 'react';
import ReposItem from './ReposItem';

function Repos(props) {
  const reposMapped = props.userRepos.map(repo => <ReposItem repo={repo} key={repo.id} />)
  return (
    <div className="single-user--repos">
      <h3>Recent Repos:</h3>
      {reposMapped}
    </div>
  )
}

export default Repos
