import { Navigate, RouteObject } from 'react-router-dom'

import { DashboardPage, LoginPage } from '../pages'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoute'

// export const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: (
//       <PublicRoute isAuthenticated={false}>
//         <LoginPage />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: '/recibos',
//     element: (
//       <PrivateRoute isAuthenticated={false}>
//         <DashboardPage />
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: '*',
//     element: <Navigate to="login" />,
//   },
// ])

export const routes = (isAuthenticated: boolean): RouteObject[] => [
  {
    path: '/login',
    element: (
      <PublicRoute isAuthenticated={isAuthenticated}>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/recibos',
    element: (
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="login" />,
  },
]
