import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { SubmitButton } from '../components/Submitbutton'
import { Form } from '../components/UserForm/styles'

export const User = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <Form>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>
        Cerrar sesión
      </SubmitButton>
    </Form>
  )
}
