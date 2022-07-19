import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { UserForm } from '../components/UserForm'
import { Img } from '../components/UserForm/styles'
/* import dog from '../assets/static/dog.png'
 */import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading, error } = useRegisterMutation()
  const { loginMutation, loading: loadingLogin, error: errorLogin } = useLoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(({ data }) => {
        const { signup } = data
        console.log(signup)
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    loginMutation({ variables: variable })
      .then(({ data }) => {
        const { login } = data
        console.log(login)
        activateAuth(login)
      })
  }
  const errorMsg = error && 'El usuario o contraseña ya existe'
  const errorMsgLogin = errorLogin && 'El usuario o contraseña es incorrecto'

  return (
    <Layout title='Registrate' >
      <Img src='https://svgsilh.com/svg/1710298.svg' />
      <UserForm
        title='Registrarse'
        error={errorMsg}
        onSubmit={onSubmit}
        disabled={loading}
      />
      <UserForm
        title='Iniciar sesión'
        error={errorMsgLogin}
        onSubmit={onSubmitLogin}
        disabled={loadingLogin}
      />
    </Layout>
  )
}
