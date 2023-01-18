import { User } from '.'

export interface Receipt {
  receiptId: string
  userId: string
  address: string
  createAt: Date
  currency: string
  description: string
  lastName: string
  logo: string
  name: string
  numberDocument: string
  payment: number
  title: string
  typeDocument: number
  user: User
}
