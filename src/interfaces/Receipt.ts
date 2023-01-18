import { User } from '.'

export interface Receipt {
  receiptId: string
  userId: string
  address: string
  createAt: string
  currency: string
  description: string
  lastName: string
  logo: string
  name: string
  numberDocument: string
  payment: number
  title: string
  typeDocument: string
  user: User
}
