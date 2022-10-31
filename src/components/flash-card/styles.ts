import { FormEvent } from 'react'
import styled from 'styled-components'

export const StyledFlashCard = styled.div`
  width: 22rem;
  min-height: 22rem;
  position: relative;
  transform-style: preserve-3d;
  margin: 0 auto;
`

const StyledCard = styled.div<{
  animationDuration?: number
  isSubmitted: boolean
}>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: ${({ theme }) =>
    `0px -3px 3px ${theme.colors.shadow}, 0px 3px 3px ${theme.colors.shadow}`};
  border: 3px solid ${({ theme }) => theme.colors.highlight90};
  border-radius: 0.4rem;
  padding: 1.25rem;
  transition: ${({ animationDuration }) =>
    `transform ${animationDuration}s ease`};
  -webkit-transition: ${({ animationDuration }) =>
    `transform ${animationDuration}s ease`};
  -moz-transition: ${({ animationDuration }) =>
    `transform ${animationDuration}s ease`};
  -ms-transition: ${({ animationDuration }) =>
    `transform ${animationDuration}s ease`};
  -o-transition: ${({ animationDuration }) =>
    `transform ${animationDuration}s ease`};
  backface-visibility: hidden;
  perspective: 37.5rem;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;

  header {
    position: relative;

    strong {
      text-transform: uppercase;
    }

    button {
      position: absolute;
      top: 0;
      right: -0.5rem;
    }
  }
`

export const StyledCardFront = styled(StyledCard)`
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  display: grid;
  grid-template-rows: auto 1fr auto;

  & > svg {
    position: absolute;
    right: -1rem;
    top: -1rem;
  }

  main {
    line-height: 1.5rem;
    white-space: pre-line;
    margin: 1rem 0 1.5rem;
    padding: 0.25rem 0;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  i {
    font-size: 80%;
    font-weight: 700;
  }

  footer {
    * {
      display: block;
    }

    a {
      color: inherit;

      font-size: 70%;
      font-weight: 700;
      margin-top: 0.5rem;
      text-decoration: none;
    }
  }

  ${({ isSubmitted }) =>
    isSubmitted &&
    `  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);`}
`

export const StyledCardBack = styled(StyledCard)`
  overflow: auto;

  ${({ isSubmitted }) =>
    isSubmitted &&
    `   transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);`}

  label {
    margin-bottom: 0.5rem;
  }
`

export const StyledForm = styled.form<{
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;

  header {
    margin-bottom: 1rem;
    flex: 1;

    h2 {
      margin: 1rem 0;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  main {
    p {
      margin-bottom: 0.75rem;
    }
  }

  footer {
    margin-top: 2rem;
    align-self: flex-end;

    button {
      margin: 0 auto;
      width: 10rem;
    }
  }
`
