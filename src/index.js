import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { App } from './App'
import { AppProvider } from './context/AppContext'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram1988-fagc04hjp-carlospianoforte.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
  )
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
