import styled from 'styled-components'

export const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`

export const StyledModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  margin: auto;
  width: 100%;
  max-width: 30rem;
  max-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const StyledModalHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0.125rem 0.2rem ${({ theme }) => theme.colors.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  height: 3rem;
  
  h3 {
    font-size: 125%;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.white};
    font-size: 100%;

    &:hover {
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
    }

    &:focus {
      outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`

export const StyledModalMain = styled.main`
  padding: 1.5rem 1rem;
  overflow: auto;
`
