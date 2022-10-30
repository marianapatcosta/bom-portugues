import styled from 'styled-components'
import { Checkbox } from '@/components'
import { StyledTitle as StyledTitleDefault } from '@/themes/global-styles'

export const StyledTitle = styled(StyledTitleDefault)`
  margin-bottom: 0.5rem;
`

export const StyledNoData = styled.p`
  text-align: center;
  margin-top: 3.5rem;
  font-size: 1105;
  font-style: italic;
`

export const StyledCardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;

  > button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    padding-left: 0.15rem;
    font-weight: 400;
    font-size: 150%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: max-content;
  }
`

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  min-height: 8rem;
  box-shadow: ${({ theme }) =>
    `0px -3px 3px ${theme.colors.shadow}, 0px 3px 3px ${theme.colors.shadow}`};
  border: 3px solid ${({ theme }) => theme.colors.highlight90};
  border-radius: 0.4rem;
  padding: 1.25rem;

  header {
    margin-bottom: 1.5rem;
    position: relative;

    h2 {
      margin: 1rem 0;
      text-align: center;

      dfn {
        font-style: normal;
        text-transform: capitalize;
      }
    }

    p {
      font-size: 95%;
    }

    button {
      position: absolute;
      top: -1rem;
      right: 0;
    }
  }

  main {
    margin-bottom: 2rem;

    > * {
      margin: 1rem 0;
    }

    p {
      white-space: pre-line;
    }

    q {
      font-size: 90%;
      font-style: italic;
    }
  }

  footer {
    a {
      color: inherit;
      font-size: 70%;
      font-weight: 700;
      margin-top: 0.5rem;
      text-decoration: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 25rem;
  }
`

export const StyledCheckbox = styled(Checkbox)`
  margin: 1rem auto;
  width: max-content;
`
