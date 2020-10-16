import React from 'react'

function ReposItem({repo}) {
  console.log(repo)
  return (
    <div className="single-user--repos__repo">
      <a href={repo.html_url} target="_blank" ><h5>{repo.name}</h5></a>
    </div>
  )
}

export default ReposItem
