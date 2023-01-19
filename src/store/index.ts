import { create } from 'zustand'
import { Receipt } from '../interfaces'

interface IState {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  modal: boolean
  setModal: (value: boolean) => void
  activeReceipt?: Receipt
  setActiveReceipt: (value?: Receipt) => void
}

export const useStore = create<IState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set(() => ({ isAuthenticated: value })),
  modal: false,
  setModal: (value) => set(() => ({ modal: value })),
  activeReceipt: undefined,
  setActiveReceipt: (activeReceipt) => set(() => ({ activeReceipt })),
}))
