import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
 */import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Layout } from './components/Layout'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './context/AppContext'

export const App = () => {
  const { isAuth } = useContext(AppContext)
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pet/:id' element={<Home />} />
            <Route exact path='/detail/:id' element={<Detail />} />
            <Route exact path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
            <Route exact path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}
