import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({
  validation
}: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
        <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type='submit' className={Styles.submit}>
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
