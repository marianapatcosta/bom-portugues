import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useCounter } from '@/hooks/useCounter'
import { QuestionContext, QuestionContextData } from '@/context/QuestionContext'
import { formatTime } from '@/utils'
import { StyledCounter } from './styles'

const Counter = () => {
  const counter: number = useCounter()
  const { todaysAnswer } = useContext<QuestionContextData>(QuestionContext)
  const { t } = useTranslation(['common'])

  return (
    <StyledCounter $isDisplayed={!!todaysAnswer && !!counter}>
      {!!todaysAnswer && !!counter && (
        <>
          <p>{t('newQuestionIn')}</p>
          <p>{formatTime(counter)}</p>
        </>
      )}
    </StyledCounter>
  )
}

export default Counter
