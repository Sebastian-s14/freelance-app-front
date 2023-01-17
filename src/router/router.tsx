import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage, DashboardPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/recibos',
    element: <DashboardPage />,
  },
  {
    path: '*',
    element: <Navigate to="login" />,
  },
])
