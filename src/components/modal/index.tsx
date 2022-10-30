import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledModalMain,
} from './styles'

interface ModalProps {
  title: string
  children: ReactNode
  closeModal: () => void
}

const Modal = ({ title, children, closeModal, ...rest }: ModalProps) => {
  const { t } = useTranslation(['common'])

  const stopEventPropagation = (event: Event) => event.stopPropagation()

  return (
    <StyledModalOverlay onClick={closeModal} {...rest}>
      <StyledModalContent onClick={stopEventPropagation}>
        <StyledModalHeader>
          <h3>{t(title)}</h3>
          <button aria-label={t('modalClose')} onClick={closeModal}>
            <span>✖</span>
          </button>
        </StyledModalHeader>
        <StyledModalMain>{children}</StyledModalMain>
      </StyledModalContent>
    </StyledModalOverlay>
  )
}

export default Modal
