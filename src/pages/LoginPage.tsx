import { useState } from 'react'
import { Button, FormGroup, Input, InputGroup, Label } from 'reactstrap'

import { eye, eyeOff, receiptLogo } from '../assets'
import { useAuth } from '../hooks'

import './LoginPage.css'

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { login } = useAuth()

  return (
    <div className="login__container container">
      <h1 className="text-center">Freelance App</h1>
      <img src={receiptLogo} className="login__logo" alt="receipt logo" />
      <form className="login__form">
        <hr />
        <FormGroup className="mb-3">
          <Label>Correo</Label>
          <Input
            type="email"
            placeholder="name@example.com"
            autoComplete="username"
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="******"
              autoComplete="current-password"
            />
            <Button
              color="secondary"
              outline
              onClick={() => setShowPassword(!showPassword)}>
              <img
                src={showPassword ? eye : eyeOff}
                width="20"
                alt="show password"
              />
            </Button>
          </InputGroup>
        </FormGroup>
        <Button color="primary" onClick={login}>
          Ingresar
        </Button>
      </form>
    </div>
  )
}
