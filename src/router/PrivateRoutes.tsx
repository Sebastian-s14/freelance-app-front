// import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'

export interface IPrivateRouteProps {
  isAuthenticated: boolean
  // eslint-disable-next-line no-undef
  children: JSX.Element
}

export const PrivateRoute = ({
  isAuthenticated,
  children,
}: IPrivateRouteProps) => {
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />
  }
  return children
}
