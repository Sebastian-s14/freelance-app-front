// import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'

type PrivateRouteProps = {
  isAuthenticated: boolean
  // eslint-disable-next-line no-undef
  children: JSX.Element
}

type LocationProps = {
  state: {
    from: Location
  }
}

export const PublicRoute = ({
  children,
  isAuthenticated,
}: PrivateRouteProps) => {
  const location = useLocation() as LocationProps
  const from = location.state?.from?.pathname || '/recibos'
  console.log('from', from)
  if (isAuthenticated) return <Navigate to={from} replace={true} />
  return children
}
