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

  useEffect(() => {
    getReceipts()
  }, [getReceipts])

  return { receipts }
}
