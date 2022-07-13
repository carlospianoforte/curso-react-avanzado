import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title } from './styles'
import { SubmitButton } from '../Submitbutton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form
        disabled={disabled}
        onSubmit={handleSubmit}
      >
        <Title>{title}</Title>
        <Input
          placeholder='Email'
          disabled={disabled}
          {...email}
        />
        <Input
          placeholder='Password'
          type='password'
          disabled={disabled}
          {...password}
        />
        <SubmitButton
          disabled={disabled}
          type='submit'
        >{title}
        </SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
