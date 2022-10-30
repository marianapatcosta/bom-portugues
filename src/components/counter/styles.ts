import styled from 'styled-components'

export const StyledCounter = styled.div<{ $isDisplayed: boolean }>`
  ${({ $isDisplayed, theme }) =>
    $isDisplayed
      ? `
    text-align: center;
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 0.5rem;
    width: max-content;
    margin: 0.75rem auto 0;

    p:first-child {
      margin-bottom: 0.25rem;
    }
  `
      : `height: 3.75rem;`}
`
