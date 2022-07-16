import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './context/AppContext'
import { NotFound } from './pages/NotFound'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

export const App = () => {
  const { isAuth } = useContext(AppContext)
  return (
    <>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:id' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
