import { useEffect } from 'react'
import { useStore } from '../store'

export const useAuth = () => {
  const { isAuthenticated, setIsAuthenticated } = useStore((state) => state)

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  useEffect(() => {
    const localAuth = localStorage.getItem('isAuthenticated')
    if (localAuth) setIsAuthenticated(true)
  }, [setIsAuthenticated])

  return {
    isAuthenticated,
    login,
    logout,
  }
}
