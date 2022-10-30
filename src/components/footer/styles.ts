import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem 0.25rem 0.7rem;
  box-shadow: 0 0.4rem 0.5rem 0.3rem rgba(0, 0, 0, 0.5);

  p {
    font-style: italic;
    font-size: 70%;
    line-height: 85%;
    color: ${({ theme }) => theme.colors.white};
    user-select: none;

    a {
      color: inherit;
      font: inherit;
      font-size: 85%;
      margin: 0 0.1rem;
    }

    &:last-child {
      text-align: end;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    &:last-child {
      text-align: initial;
    }
  }
`

export const StyledFooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;

  // for safari below 14.1 that not supports gap with flexbox
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      margin: -0.335rem;
      & > * {
        margin: 0.25rem;
      }
    }
  }
  a {
    line-height: 85%;
    transition: transform 0.2s ease-in-out;
    -webkit-transition: transform 0.2s ease-in-out;
    -moz-transition: transform 0.2s ease-in-out;
    -ms-transition: transform 0.2s ease-in-out;
    -o-transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-0.1rem);
      -webkit-transform: translateY(-0.1rem);
      -moz-transform: translateY(-0.1rem);
      -ms-transform: translateY(-0.1rem);
      -o-transform: translateY(-0.1rem);
    }

    svg {
      width: 1.1rem;
      height: 1.1rem;
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
