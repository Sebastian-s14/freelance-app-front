import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useRoutes } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'
import { routes } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

function App() {
  const { isAuthenticated } = useAuth()
  const routesElement = useRoutes(routes(isAuthenticated))
  return (
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      {routesElement}
    </QueryClientProvider>
  )
}

export default App
