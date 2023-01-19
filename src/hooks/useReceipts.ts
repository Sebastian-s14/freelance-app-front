import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { addReceipt, deleteReceipt, getReceipts } from '../api/receipts'

export const useReceipts = () => {
  const queryClient = useQueryClient()
  const {
    data: receipts,
    isLoading: isLoadingReceipts,
    refetch,
  } = useQuery({
    queryKey: ['receipts'],
    queryFn: getReceipts,
  })

  const {
    mutate: mutateAdd,
    isLoading: isLoadingAdd,
    isSuccess: isSuccessAdd,
  } = useMutation({
    mutationFn: addReceipt,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
    },
  })

  const { mutate: mutateDelete, isLoading: isLoadingDelete } = useMutation({
    mutationFn: deleteReceipt,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
    },
  })

  return {
    receipts,
    isLoadingReceipts,
    refetch,
    mutateAdd,
    isLoadingAdd,
    isSuccessAdd,
    mutateDelete,
    isLoadingDelete,
  }
}
