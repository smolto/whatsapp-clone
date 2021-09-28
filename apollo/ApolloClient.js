import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws'

import { DGRAPH_URL } from '../shared/environment/constants'

const httpLink = new HttpLink({
  uri: `https://${DGRAPH_URL}`
})

const wsLink = process.browser
  ? new WebSocketLink({
    uri: `wss://${DGRAPH_URL}`,
    options: {
      reconnect: true
    }
  })
  : null

const splitLink = process.browser
  ? split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )
  : httpLink

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

export default client
