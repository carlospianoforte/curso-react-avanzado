import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { SubmitButton } from '../components/Submitbutton'
import { Form } from '../components/UserForm/styles'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <Layout>
      <Form>
        <h1>User</h1>
        <SubmitButton onClick={removeAuth}>
          Cerrar sesión
        </SubmitButton>
      </Form>
    </Layout>
  )
}
