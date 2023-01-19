import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export const useStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set(() => ({ isAuthenticated: value })),
}))
