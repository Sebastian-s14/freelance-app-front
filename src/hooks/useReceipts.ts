import axios, { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'

import { Receipt } from '../interfaces'

export const useReceipts = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([])

  const getReceipts = useCallback(() => {
    axios
      .get('http://localhost:5250/api/receipt')
      .then(({ data }: AxiosResponse<Receipt[]>) => setReceipts(data))
      .catch(() => console.log('algo salió mal'))
  }, [])

  const addReceipt = (
    receipt: Omit<Receipt, 'receiptId' | 'userId' | 'user' | 'createAt'>,
  ) => {
    axios
      .post('http://localhost:5250/api/receipt', {
        ...receipt,
        userId: 'fe2de405-c38e-4c90-ac52-da0540dfb410',
      })
      .then(({ data }) => console.log(data))
      .catch(() => console.log('error al agregar recibo'))
  }

  useEffect(() => {
    getReceipts()
  }, [getReceipts])

  return { receipts, addReceipt }
}
