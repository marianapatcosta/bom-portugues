import styled from 'styled-components'
import { MouseEventHandler } from 'react'
import type { ToastType } from '@/types'
import { dark } from '@/themes/dark'

const typeClass = (type: ToastType, colors: typeof dark.colors): string => {
  const toastTypesClasses: any = {
    alert: colors.red,
    info: colors.highlight90,
    success: colors.green,
    warning: colors.yellow,
  }
  return toastTypesClasses[type]
}

export const StyledToast = styled.div<{
  type: ToastType
}>`
  box-shadow: 0 0.0625rem 0.2rem ${({ theme }) => theme.colors.shadow};
  width: 22rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 1rem;
  margin: auto;
  padding: 1rem;
  z-index: 30;
  border-radius: 0.25rem;
  -webkit-border-radius: 0.25rem;
  -moz-border-radius: 0.25rem;
  -ms-border-radius: 0.25rem;
  -o-border-radius: 0.25rem;
  background-color: ${({ type, theme }) => typeClass(type, theme.colors)};
  font-weight: 700;
  font-size: 90%;
`

export const StyledCloseButton = styled.button<{
  onClick?: MouseEventHandler<HTMLButtonElement>
}>`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
  }
`

export const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-top: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const StyledToastMessage = styled.div<{ type?: string }>`
  font-size: 95%;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5rem;
  white-space: pre-line;
  margin-left: 0.5rem;
`
