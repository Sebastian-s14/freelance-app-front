import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { eye, eyeOff, receiptLogo } from '../assets'
import './LoginPage.css'

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className="login__container container">
      <h1 className="text-center">Freelance App</h1>
      <img src={receiptLogo} className="login__logo" alt="receipt logo" />
      <form className="login__form">
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <label htmlFor="inputPassword" className="form-label">
          Contraseña
        </label>
        <div className="input-group mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={() => setShowPassword(!showPassword)}>
            <img
              src={showPassword ? eye : eyeOff}
              width="20"
              alt="show password"
            />
          </button>
        </div>

        <div className="d-grid gap-2 mb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate('/recibos')}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}
