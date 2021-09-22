import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export default function Profile () {
  const { user } = useUser()
  console.log(user)
  if (user) {
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  } else {
    return (
      <a href="/api/auth/login">Login</a>
    )
  }
}
