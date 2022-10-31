import { useEffect, useState } from 'react'
import { StyledPieChart } from './styles'

interface PieChartProps {
  winRate: number
}

const PieChart = ({ winRate }: PieChartProps) => {
  const ANIMATION_DURATION = 0.9 // in s
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (value === winRate) {
        return clearInterval(timer)
      }
      setValue((prevValue) => prevValue + 1)
    }, (ANIMATION_DURATION * 1000) / winRate)

    return () => clearInterval(timer)
  }, [value, winRate])

  return (
    <StyledPieChart animationDuration={ANIMATION_DURATION} winRate={winRate}>
      <svg viewBox='0 0 40 40'>
        <circle
          className='chart-hole'
          cx='20'
          cy='20'
          r='15.91549430918954'
        ></circle>
        <circle
          className='chart-ring'
          cx='20'
          cy='20'
          r='15.91549430918954'
          strokeWidth='3.5'
        ></circle>
        <circle
          className='chart-segment'
          cx='20'
          cy='20'
          r='15.91549430918954'
          strokeWidth='3.85'
          strokeDashoffset='25'
        ></circle>
        <text y='55%' x='50%' textAnchor='middle'>
          {`${value}%`}
        </text>
      </svg>
    </StyledPieChart>
  )
}

export default PieChart
