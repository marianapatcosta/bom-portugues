import { HTMLProps, MouseEvent } from 'react'
import { Tick } from '@/assets/icons'
import {
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxToggle,
} from './styles'

interface CheckboxProps {
  label?: string
  disabled?: boolean
  isSmall?: boolean
  onChange: (event: MouseEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  checked,
  name,
  disabled,
  className,
  label,
  isSmall = false,
  onChange,
}: CheckboxProps & HTMLProps<HTMLInputElement>) => {
  return (
    <StyledCheckbox disabled={disabled} isSmall={isSmall} className={className}>
      <StyledCheckboxInput
        type='checkbox'
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckboxToggle disabled={disabled} isSmall={isSmall}>
        {checked && <Tick />}
      </StyledCheckboxToggle>
      {label}
    </StyledCheckbox>
  )
}
export default Checkbox
