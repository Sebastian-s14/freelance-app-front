import axios, { AxiosResponse } from 'axios'

import { Receipt } from '../interfaces'

export const getReceipts = async () => {
  const { data }: AxiosResponse<Receipt[]> = await axios.get(
    `${import.meta.env.VITE_APP_URL}/receipts`,
  )
  return data
}

interface AddReceiptParams {
  receipt: Omit<Receipt, 'receiptId' | 'userId' | 'user' | 'createAt'>
  userId: string
}

interface UpdateReceiptParams {
  receipt: Omit<Receipt, 'userId' | 'user' | 'createAt'>
  userId: string
}

export const addReceipt = async ({ receipt, userId }: AddReceiptParams) => {
  return axios.post(`${import.meta.env.VITE_APP_URL}/receipts`, {
    ...receipt,
    userId,
  })
}

export const updateReceipt = async ({
  receipt,
  userId,
}: UpdateReceiptParams) => {
  return axios.put(
    `${import.meta.env.VITE_APP_URL}/receipts/${receipt.receiptId}`,
    {
      ...receipt,
      userId,
    },
  )
}

export const deleteReceipt = async (receiptId: string) => {
  return axios.delete(`${import.meta.env.VITE_APP_URL}/receipts/${receiptId}`)
}

export const generatePdf = (receiptId: string) => {
  return axios.post<string>(
    `${import.meta.env.VITE_APP_URL}/generate-pdf/${receiptId}`,
  )
}
