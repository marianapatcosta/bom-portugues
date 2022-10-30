import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
`

export const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 0.25rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 40rem;
  }
`
