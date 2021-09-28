import { useEffect, useState } from 'react'

import '../styles/globals.css'
import '../styles/essential/button.css'
import '../styles/essential/input.css'

import {
  ApolloProvider
} from '@apollo/client'

import { UserProvider } from '@auth0/nextjs-auth0'

import client from './../apollo/ApolloClient'

import UserState from '../context/User/UserState'

function MyApp ({ Component, pageProps }) {
  const [userLoggedIn, setUserLoggedIn] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('userLoggedIn') === null) {
      setUserLoggedIn(false)
    } else {
      if (localStorage.getItem('userEmail') === null) {
        setUserLoggedIn(false)
      } else {
        setUserLoggedIn(true)
      }
    }
  }, [])
  return (
    <UserState>
      <UserProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        </ApolloProvider>
      </UserProvider>
    </UserState>
  )
}

export default MyApp
