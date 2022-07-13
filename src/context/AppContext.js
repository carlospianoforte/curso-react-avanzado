import React, { useState, createContext } from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const activateAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }
  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </AppContext.Provider>
  )
}
