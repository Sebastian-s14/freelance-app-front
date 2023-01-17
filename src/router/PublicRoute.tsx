import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'

type PrivateRouteProps = {
  isAuthenticated: boolean
  //   children: JSX.Element
}

type LocationProps = {
  state: {
    from: Location
  }
}

export const PublicRoute = ({
  children,
  isAuthenticated,
}: PropsWithChildren<PrivateRouteProps>) => {
  const location = useLocation() as LocationProps
  const from = location.state?.from?.pathname || '/'
  console.log('from', from)
  if (isAuthenticated) return <Navigate to={from} replace={true} />
  return children
}
