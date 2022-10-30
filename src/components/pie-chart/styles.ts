import styled, { css, keyframes } from 'styled-components'

interface StyledPieChartProps {
  animationDuration?: number
  winRate: number
}

const animateChart = (winRate: number) => keyframes`
  0% {
    opacity: 0.2;
    stroke-dasharray: 0, 100;
  }
  100% {
    opacity: 1;
    stroke-dasharray: ${winRate} ${100 - winRate};
  }
`

export const StyledPieChart = styled.div<StyledPieChartProps>`
  width: 100%;

  svg {
    width: 60%;
    .chart-hole {
      fill: ${({ theme }) => theme.colors.primary};
    }

    .chart-ring {
      stroke: ${({ theme }) => theme.colors.disabled};
      fill: ${({ theme }) => theme.colors.transparent};
    }

    .chart-segment {
      transform-origin: center;
      stroke: ${({ theme }) => theme.colors.secondary};
      fill: ${({ theme }) => theme.colors.transparent};
      animation: ${({ winRate, animationDuration }) => css`
        ${animateChart(winRate)} ${animationDuration}s ease-in forwards;
      `};
    }
    text {
      font-size: 50%;
      fill: ${({ theme }) => theme.colors.font};
    }
  }
`
