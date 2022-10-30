import React, { CSSProperties, HTMLAttributes, useEffect } from 'react'
import { Alert, Info, Success, Warning } from '@/assets/icons'

import {
  StyledToast,
  StyledCloseButton,
  StyledToastContent,
  StyledToastMessage,
} from './styles'
import { ToastType } from '@/types'
import { DEFAULT_AUTODISMISS_TIME } from '@/constants'
import { useTranslation } from 'react-i18next'

const TOAST_ICONS = {
  [ToastType.ALERT]: Alert,
  [ToastType.INFO]: Info,
  [ToastType.SUCCESS]: Success,
  [ToastType.WARNING]: Warning,
}

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  message: string
  type?: ToastType
  autoDismissable?: boolean
  timeToAutoDismiss?: number
  additionalClass?: string
  onToastDismiss: () => void
}

const Toast = ({
  message,
  type = ToastType.INFO,
  autoDismissable = true,
  timeToAutoDismiss = DEFAULT_AUTODISMISS_TIME,
  additionalClass,
  onToastDismiss,
  ...props
}: ToastProps) => {
  const { t } = useTranslation(['common'])
  useEffect(() => {
    if (!autoDismissable) {
      return
    }
    const timerId = setTimeout(onToastDismiss, timeToAutoDismiss)

    return () => clearTimeout(timerId)
  }, [autoDismissable, timeToAutoDismiss, onToastDismiss])

  const ToastIcon = TOAST_ICONS[type]

  return (
    <StyledToast className={additionalClass} type={type} {...props}>
      <StyledCloseButton
        aria-label={t('toastDismiss')}
        title={t('toastDismiss')}
        onClick={onToastDismiss}
      >
        <span aria-hidden={true}>✖</span>
      </StyledCloseButton>
      <StyledToastContent>
        <ToastIcon />
        <StyledToastMessage type={type}>{message}</StyledToastMessage>
      </StyledToastContent>
    </StyledToast>
  )
}

export default Toast
