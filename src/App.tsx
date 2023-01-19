import { useRoutes } from 'react-router-dom'

import { useAuth } from './hooks'
import { routes } from './router'

function App() {
  const { isAuthenticated } = useAuth()

  const routesElement = useRoutes(routes(isAuthenticated))

  return <>{routesElement}</>
}

export default App
