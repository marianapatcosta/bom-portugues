import { Tick } from '@/assets/icons'
import { ThemeType } from '@/themes/dark'
import styled, { css, keyframes } from 'styled-components'

const strokeAnimation = keyframes`
  100% {
   stroke-dashoffset: 0;
  }
`

const fillAnimation = ({
  theme,
  isSuccess,
}: {
  theme: ThemeType
  isSuccess: boolean
}) => keyframes`
  100% {
    fill:  ${isSuccess ? theme.colors.green : theme.colors.red};
  }
`

const tickAnimation = ($circleWidth: number) => keyframes`
  100% { stroke-dashoffset: -${$circleWidth * 2}; }
`

export const StyledContainer = styled.svg`
  width: 3.5rem;
`

export const StyledStrokeCircle = styled.circle<{
  circleLength: number
  animationDuration: number
  animationDelay: number
  isSuccess: boolean
}>`
  stroke: ${({ theme, isSuccess }) =>
    isSuccess ? theme.colors.darkGreen : theme.colors.darkRed};
  stroke-dasharray: ${({ circleLength }) => circleLength};
  stroke-dashoffset: ${({ circleLength }) => circleLength};
  fill: none;
  animation: ${({ animationDuration, animationDelay }) => css`
    ${strokeAnimation} ${animationDuration}s ${animationDelay}s ease-in forwards;
  `};
`

export const StyledFilledCircle = styled.circle<{
  animationDuration: number
  animationDelay: number
  isSuccess: boolean
}>`
  fill: none;
  animation: ${({ animationDuration, animationDelay, isSuccess, theme }) => css`
    ${fillAnimation({
      theme,
      isSuccess,
    })} ${animationDuration}s ${animationDelay}s ease-in forwards;
  `};
`

export const StyledTick = styled.polyline<{
  $circleWidth: number
  $animationDuration: number
  $animationDelay: number
}>`
  stroke-dasharray: ${({ $circleWidth }) => $circleWidth};
  stroke-dashoffset: ${({ $circleWidth }) => -$circleWidth};
  animation: ${({ $animationDuration, $animationDelay, $circleWidth }) => css`
    ${tickAnimation(
      $circleWidth
    )} ${$animationDuration}s ${$animationDelay}s ease-in forwards;
  `};
`

export const StyledX = styled.g<{
  $circleWidth: number
  $animationDuration: number
  $animationDelay: number
}>`
  stroke-dasharray: ${({ $circleWidth }) => $circleWidth};
  stroke-dashoffset: ${({ $circleWidth }) => -$circleWidth};
  animation: ${({ $animationDuration, $animationDelay, $circleWidth }) => css`
    ${tickAnimation(
      $circleWidth
    )} ${$animationDuration}s ${$animationDelay}s ease-in forwards;
  `};
`
