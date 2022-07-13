import React from 'react'
import { Logo } from '../Logo'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { NavBar } from '../NavBar'

export const Layout = ({ children }) => (
  <div className='App'>
    <GlobalStyle />
    <Logo />
    {children}
    <NavBar />

  </div>
)
