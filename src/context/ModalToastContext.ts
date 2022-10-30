import { createContext } from 'react'
import { ToastData } from '@/types'

export interface ModalToastContextData {
  openModal: () => void
  addToast: (newToast: ToastData) => void
}

export const ModalToastContext = createContext({} as ModalToastContextData)
