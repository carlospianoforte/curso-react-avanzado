import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram1988-fagc04hjp-carlospianoforte.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
