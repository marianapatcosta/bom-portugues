import { HTMLAttributes, MouseEvent } from 'react'
import { useTheme } from 'styled-components'
import { StyledButton } from './styles'

interface FavoriteButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isFavorite?: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const FavoriteButton = ({
  isFavorite,
  onClick,
  ...rest
}: FavoriteButtonProps) => {
  const { colors } = useTheme()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClick(event)
  }
  return (
    <StyledButton {...rest} onClick={handleClick}>
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 45 45'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M33.549 2.744c-3.954-3.779-10.223-3.637-14.002.317l-1.369 1.432-1.432-1.369C12.792-.656 6.523-.513 2.744 3.441s-3.637 10.223.317 14.002l1.432 1.368L18.81 32.497l13.686-14.319 1.368-1.432c3.78-3.954 3.638-10.223-.316-14.002Z'
          fill={isFavorite ? colors.red : 'none'}
          strokeWidth='5'
          stroke={colors.red}
        />
      </svg>
    </StyledButton>
  )
}
export default FavoriteButton
