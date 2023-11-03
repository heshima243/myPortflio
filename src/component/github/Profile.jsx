import React from 'react'

export default function Profile({props}) {
  return (
    <div>
        {/* <img src={props.avatar_url} alt={props.avatar_url} /> */}
        <h2>{props.name}</h2>
    </div>
  )
}
