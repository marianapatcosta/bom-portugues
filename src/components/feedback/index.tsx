import React from 'react'
import { useTheme } from 'styled-components'
import {
  FLIP_ANIMATION_DURATION,
  STROKE_ANIMATION_DURATION,
  FILL_ANIMATION_DURATION,
  SYMBOL_ANIMATION_DURATION,
} from '@/constants'
import {
  StyledContainer,
  StyledStrokeCircle,
  StyledFilledCircle,
  StyledTick,
  StyledX,
} from './styles'

interface FeedbackProps {
  isSuccess: boolean
}

const Feedback = ({ isSuccess }: FeedbackProps) => {
  const RADIUS: number = 50
  const CIRCLE_LENGTH: number = 2 * Math.PI * RADIUS // 2PI*R
  const OFFSET: number = 12
  const strokeAnimationDelay: number = FLIP_ANIMATION_DURATION * 0.15
  const fillAnimationDelay: number =
    strokeAnimationDelay + STROKE_ANIMATION_DURATION
  const symbolAnimationDelay: number =
    fillAnimationDelay + FILL_ANIMATION_DURATION

  const theme = useTheme()

  return (
    <StyledContainer viewBox={`0 0 ${RADIUS * 2}  ${RADIUS * 2}`}>
      <StyledStrokeCircle
        cx={RADIUS}
        cy={RADIUS}
        r={RADIUS - OFFSET}
        strokeWidth={OFFSET}
        isSuccess={isSuccess}
        animationDuration={STROKE_ANIMATION_DURATION}
        animationDelay={strokeAnimationDelay}
        circleLength={CIRCLE_LENGTH}
      />
      <StyledFilledCircle
        cx={RADIUS}
        cy={RADIUS}
        r={RADIUS - OFFSET}
        isSuccess={isSuccess}
        animationDuration={FILL_ANIMATION_DURATION}
        animationDelay={fillAnimationDelay}
      />
      {isSuccess ? (
        <StyledTick
          fill='none'
          stroke={theme.colors.darkGreen}
          strokeWidth={OFFSET}
          strokeLinecap='round'
          strokeLinejoin='round'
          points={`${RADIUS * 0.5},${RADIUS * 0.8} ${RADIUS},${RADIUS * 1.35} ${
            RADIUS * 1.8
          },${RADIUS * 0.5}`}
          $circleWidth={RADIUS * 2}
          $animationDuration={SYMBOL_ANIMATION_DURATION}
          $animationDelay={symbolAnimationDelay}
        />
      ) : (
        <StyledX
          stroke={theme.colors.darkRed}
          strokeWidth={OFFSET}
          strokeLinecap='round'
          $circleWidth={RADIUS * 2}
          $animationDuration={SYMBOL_ANIMATION_DURATION}
          $animationDelay={
            FLIP_ANIMATION_DURATION +
            STROKE_ANIMATION_DURATION +
            FILL_ANIMATION_DURATION
          }
        >
          <line
            x1={RADIUS * 0.65}
            y1={RADIUS * 0.65}
            x2={RADIUS * 1.35}
            y2={RADIUS * 1.35}
          />

          <line
            x1={RADIUS * 1.35}
            y1={RADIUS * 0.65}
            x2={RADIUS * 0.65}
            y2={RADIUS * 1.35}
          />
        </StyledX>
      )}
    </StyledContainer>
  )
}

export default Feedback
