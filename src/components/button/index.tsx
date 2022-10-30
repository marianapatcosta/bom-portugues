import { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
  disabled?: boolean
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  iconText?: string
  children?: ReactNode
  isRound?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  onClick,
  icon: Icon,
  iconText,
  label,
  isRound = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      {...rest}
      hasIconAndLabel={!!Icon && !!label}
      isRound={isRound}
      onClick={onClick}
    >
      {!!Icon && <Icon />}
      {!!label && label}
      {!!children && children}
    </StyledButton>
  )
}
export default Button
