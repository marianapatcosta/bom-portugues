import styled from 'styled-components'
import Button from '../button'

export const StyledToggleButtonWrapper = styled(Button)<{
  isDarkTheme?: boolean
}>`
  position: relative;

  svg {
    stroke-width: 3px;

    ${({ isDarkTheme, theme }) =>
      !isDarkTheme &&
      `
       fill: none;
      stroke: ${theme.colors.white};
    `}
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    transition: all 0.1s ease-in-out 0s;

    ${({ isDarkTheme }) =>
      isDarkTheme &&
      `
        box-shadow: 0.5rem 0.5rem 2rem rgba(255, 255, 0, 0.8),
        0 0.3rem 2rem rgba(255, 255, 0, 0.8), 0 0.5rem 5rem rgba(255, 255, 0, 0.8),
        0 0.5rem 10rem rgba(255, 255, 0, 0.6);
        background-color: rgba(255, 255, 0, 0.2);
        filter: blur(0.3rem);
        transition: all 0.3s ease-in-out 0.3s;
    `}
  }
`
