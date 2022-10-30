import styled from 'styled-components'

export const StyledSection = styled.div`
  margin: 1rem auto 2rem;
  max-width: 30rem;

  h2 {
    margin: 2rem 0 1rem;
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
  }

  &:first-child {
    a {
      display: block;
      margin-bottom: 0.25rem;
      color: inherit;
    }
  }
`
