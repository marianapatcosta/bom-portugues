import styled from 'styled-components'

export const StyledButton = styled.button<{
  hasIconAndLabel?: boolean
  isRound?: boolean
  disabled?: boolean
}>`
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.highlight10}, ${theme.colors.highlight120})`};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 0.35rem;
  border-radius: 0.25rem;
  -webkit-border-radius: 0.25rem;
  -moz-border-radius: 0.25rem;
  -ms-border-radius: 0.25rem;
  -o-border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.125rem solid ${({ theme }) => theme.colors.highlight50};
  border-width: 0.1rem 0.1rem 0.15rem;
  box-shadow: ${({ theme }) => `0 0.3rem 0
      ${theme.colors.highlight120},
    0 0.5rem 0.4rem ${theme.colors.overlay}`};
  transition: filter 0.2s ease-in-out;
  -webkit-transition: filter 0.2s ease-in-out;
  -moz-transition: filter 0.2s ease-in-out;
  -ms-transition: filter 0.2s ease-in-out;
  -o-transition: filter 0.2s ease-in-out;
  user-select: none;
  height: 1.8rem;
  min-width: 1.8rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 2.2rem;
    min-width: 2.2rem;
  }

  ${({ hasIconAndLabel }) =>
    hasIconAndLabel &&
    `
      gap: 0.5rem;
    `}

  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none;
      opacity: 0.75;
    `}


  &:active {
    box-shadow: ${({ theme }) => `0 0.1rem 0
      ${theme.colors.highlight120},
    0 0.5rem 0.4rem ${theme.colors.overlay}`};
    transform: translateY(0.15rem);
    -webkit-transform: translateY(0.15rem);
    -moz-transform: translateY(0.15rem);
    -ms-transform: translateY(0.15rem);
    -o-transform: translateY(0.15rem);
  }

  &:hover {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  ${({ isRound, theme }) =>
    isRound &&
    `
      width: 2.15rem;
      height: 2.15rem;
      border-radius: 50%;
      box-shadow: ${`0 0.15rem 0.1rem ${theme.colors.overlay}`};

      &:active {
        box-shadow: initial;
        transform: initial;
        -webkit-transform: initial;
        -moz-transform: initial;
        -ms-transform: initial;
        -o-transform: initial;
      }

      @media (min-width: ${theme.breakpoints.xs}) {
        width: 2.5rem;
        height: 2.5rem;
      }
    `}

  svg {
    fill: ${({ theme }) => theme.colors.white};
    ${({ hasIconAndLabel }) =>
      hasIconAndLabel
        ? `width: 0.9rem;
             height: 0.9rem;`
        : `width: 1rem;
             height: 1rem;`}

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      ${({ hasIconAndLabel }) =>
        hasIconAndLabel
          ? `width: 1rem;
             height: 1rem;`
          : `width: 1.2rem;
             height: 1.2rem;`}
    }
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`
