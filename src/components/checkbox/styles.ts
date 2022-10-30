import styled from 'styled-components'

export const StyledCheckbox = styled.label<{
  disabled?: boolean
  isSmall?: boolean
}>`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  ${({ disabled, theme }) => disabled && `color: ${theme.colors.disabled};`}

  ${({ isSmall }) => isSmall && `font-size: 90%;`}

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const StyledCheckboxToggle = styled.div<{
  disabled?: boolean
  isSmall?: boolean
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.125rem;
  margin-right: 0.5rem;
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.black};
  border-radius: 0.2rem;
  border: 2px solid ${({ theme }) => theme.colors.highlight90};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  :hover {
    transform: translateY(-2px);
  }

  ${({ isSmall }) =>
    isSmall &&
    ` width: 1rem;
  height: 1rem;`}

  ${({ disabled }) =>
    disabled &&
    `
     opacity: 0.7;
     pointer-events: none;
     
    `}
`

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  :checked + ${StyledCheckboxToggle} {
    background-color: ${({ theme }) => theme.colors.highlight90};
  }

  :hover:not(:disabled) + ${StyledCheckboxToggle} {
    transform: translateY(-2px);
  }

  // when focus, adds a border to its sibling StyledCheckboxToggle
  :focus-visible + ${StyledCheckboxToggle} {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight90};
  }

  :focus:not(:focus-visible) + ${StyledCheckboxToggle} {
    outline: none;
  }
`
