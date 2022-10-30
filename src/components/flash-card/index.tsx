import {
  forwardRef,
  FormEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  MouseEvent,
} from 'react'
import { useTranslation } from 'react-i18next'
import { GENERAL_ANSWER_OPTIONS, FLIP_ANIMATION_DURATION } from '@/constants'
import { Question } from '@/types'
import { Button, Checkbox, FavoriteButton, Feedback } from '..'
import {
  StyledFlashCard,
  StyledCardFront,
  StyledCardBack,
  StyledForm,
} from './styles'

interface FlashcardProps {
  question: Question
  todaysAnswer?: string | null
  isFavorite?: boolean
  handleAnswerSubmission?: (
    selectedAnswer: string,
    isAnswerCorrect: boolean
  ) => void
  toggleIsFavorite?: (event: MouseEvent<HTMLButtonElement>) => void
}

export type FlashCardHandle = {
  resetForm: () => void
}

const FlashCard = forwardRef<FlashCardHandle, FlashcardProps>(
  (
    {
      question,
      todaysAnswer,
      isFavorite,
      handleAnswerSubmission,
      toggleIsFavorite,
    },
    ref
  ) => {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const showIsFavorite = isFavorite !== undefined && !!toggleIsFavorite

    const { t } = useTranslation(['home'])
    const options = useMemo(
      () => [...question.options, ...GENERAL_ANSWER_OPTIONS],
      [question]
    )

    const checkIsAnswerCorrect = (
      correctOption: string | string[],
      answer: string
    ): boolean => {
      if (Array.isArray(correctOption)) {
        return correctOption.includes(answer)
      }

      return correctOption === answer
    }

    const submitAnswer = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!selectedAnswer) {
        return
      }

      const isAnswerCorrect: boolean = checkIsAnswerCorrect(
        question.correctOption,
        selectedAnswer
      )
      setIsAnswerCorrect(isAnswerCorrect)
      setIsSubmitted(true)
      !!handleAnswerSubmission &&
        handleAnswerSubmission(selectedAnswer, isAnswerCorrect)
      setSelectedAnswer('')
    }

    useImperativeHandle(ref, () => ({
      resetForm: (): void => {
        setSelectedAnswer('')
        setIsSubmitted(false)
      },
    }))

    useEffect(() => {
      if (todaysAnswer) {
        setSelectedAnswer(todaysAnswer)
        const isAnswerCorrect: boolean = checkIsAnswerCorrect(
          question.correctOption,
          todaysAnswer
        )
        setIsAnswerCorrect(isAnswerCorrect)
      }
    }, [todaysAnswer])

    return (
      <StyledFlashCard>
        <StyledCardBack
          isSubmitted={isSubmitted}
          animationDuration={FLIP_ANIMATION_DURATION}
        >
          <StyledForm onSubmit={submitAnswer}>
            <header>
              <h3>{question.title}</h3>
              {showIsFavorite && (
                <FavoriteButton
                  title={t(
                    isFavorite ? 'removeFromFavorites' : 'addToFavorites'
                  )}
                  isFavorite={isFavorite}
                  onClick={toggleIsFavorite}
                />
              )}
            </header>
            <main>
              <p>{t('whatIsCorrect')}</p>
              {options.map((option) => (
                <Checkbox
                  key={`option-${option}`}
                  label={t(option)}
                  value={option}
                  checked={option === selectedAnswer}
                  disabled={!!todaysAnswer}
                  onChange={() => setSelectedAnswer(option)}
                />
              ))}
            </main>
            <footer>
              <Button disabled={!selectedAnswer} label={t('checkAnswer')} />
            </footer>
          </StyledForm>
        </StyledCardBack>

        <StyledCardFront
          isSubmitted={isSubmitted}
          animationDuration={FLIP_ANIMATION_DURATION}
        >
          <header>
            {t('correctAnswerIs')}
            <strong>{t(question.correctOption)}</strong>.
            {showIsFavorite && (
              <FavoriteButton
                title={t(isFavorite ? 'removeFromFavorites' : 'addToFavorites')}
                isFavorite={isFavorite}
                onClick={toggleIsFavorite}
              />
            )}
          </header>
          <main>{question.answer}</main>

          <footer>
            <i>{t('andIsHowToWrite')}</i>
            <a
              href={question.link}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >{`${t('source')} ${question.source}`}</a>
          </footer>
          {isSubmitted && <Feedback isSuccess={isAnswerCorrect} />}
        </StyledCardFront>
      </StyledFlashCard>
    )
  }
)
export default FlashCard
