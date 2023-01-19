import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  addReceipt,
  deleteReceipt,
  getReceipts,
  updateReceipt,
} from '../api/receipts'
import { useStore } from '../store'

export const useReceipts = () => {
  const setModal = useStore((state) => state.setModal)
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
    onSettled: async () => {
      queryClient.invalidateQueries({ queryKey: ['receipts'] })
      setModal(false)
    },
  })

  const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useMutation({
    mutationFn: updateReceipt,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['receipts'] })
      setModal(false)
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
    mutateUpdate,
    isLoadingUpdate,
    mutateDelete,
    isLoadingDelete,
  }
}
