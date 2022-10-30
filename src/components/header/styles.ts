import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;

    // for safari below 14.1 that not supports gap with flexbox
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        margin: -1.5rem;
        & > * {
          margin: 1.5rem;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 5rem;
    padding: 0 1rem;

    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        margin: -125rem;
        & > * {
          margin: 2.5rem;
        }
      }
    }
  }
`

export const StyledTitleWrapper = styled.div`
  position: relative;

  > button {
    position: absolute;
    right: 6%;
    top: -55%;
    font: inherit;

    a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};

      @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 2rem;
      }
    }
  }
`

export const StyledTitle = styled.h1<{ $disabledLink: boolean }>`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  a {
    text-decoration: none;
    color: inherit;
    ${({ $disabledLink }) => $disabledLink && `pointer-events: none;`}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`

export const StyledHeaderRight = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.5rem;
  }
`
