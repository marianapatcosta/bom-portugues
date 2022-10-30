import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.font};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.9rem;
    line-height: 1.2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    * ::selection {
      background: ${({ theme }) => theme.colors.highlight10};
      color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.0rem;;
    }
  }

  #__next {
    width: 100vw;
    
    /* workaround to overcome the incorrect set of 100vh by mobile browsers when address bar is visible  */
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  * :focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight10};
  }

  * :focus:not(:focus-visible) {
    border-color: ${({ theme }) => theme.colors.highlight10};
    outline: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const StyledTitle = styled.h1`
  margin: 2rem 0;
  text-align: center;
`
