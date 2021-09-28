import '../styles/globals.css'
import '../styles/essential/button.css'
import '../styles/essential/input.css'

import {
  ApolloProvider
} from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'

import client from './../apollo/ApolloClient'

function MyApp ({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  )
}

export default MyApp
