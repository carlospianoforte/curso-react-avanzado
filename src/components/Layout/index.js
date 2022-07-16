import React from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle }) => (
  <div className='App'>
    <Helmet>
      {title && <title>{title} | Petgram  </title>}
      {subtitle && <meta name='description' content='subtitle' />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Div>
    <GlobalStyle />
    {children}
  </div>
)
