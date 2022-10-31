import { useContext, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import fs from 'fs'
import path from 'path'
import { FlashCard } from '@/components'
import { StyledTitle } from '@/themes/global-styles'
import {
  getQuestionOfTheDay,
  getRandomNumber,
  updateGameState,
  updateGameStatistics,
} from '@/utils'
import { QuestionContext, QuestionContextData } from '@/context/QuestionContext'
import {
  ModalToastContext,
  ModalToastContextData,
} from '@/context/ModalToastContext'
import { TIME_TO_OPEN_MODAL } from '@/constants'
import { Question } from '@/types'

interface HomeProps {
  question: Question
}

const Home = ({ question }: HomeProps) => {
  const { t } = useTranslation(['home'])
  const { todaysAnswer, setQuestion, setAnswer } =
    useContext<QuestionContextData>(QuestionContext)
  const { openModal } = useContext<ModalToastContextData>(ModalToastContext)

  const handleAnswerSubmission = (
    selectedAnswer: string,
    isAnswerCorrect: boolean
  ): void => {
    updateGameStatistics(isAnswerCorrect)
    updateGameState(selectedAnswer)
    setAnswer(selectedAnswer)
  }

  useEffect(() => {
    setQuestion(question)
  }, [setQuestion, question])

  useEffect(() => {
    setQuestion(question)
    let timerId: ReturnType<typeof setTimeout>
    if (todaysAnswer) {
      timerId = setTimeout(openModal, TIME_TO_OPEN_MODAL)
    }

    return () => clearTimeout(timerId)
  }, [todaysAnswer])

  return (
    <>
      <StyledTitle> {t('dailyQuestion')}</StyledTitle>
      <FlashCard
        question={question}
        todaysAnswer={todaysAnswer}
        handleAnswerSubmission={handleAnswerSubmission}
      />
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const QUESTIONS_DIRECTORY = path.join(process.cwd(), 'src/content')
  const filePath = path.join(QUESTIONS_DIRECTORY, 'all-questions.json')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const questions: Question[] = JSON.parse(fileContent)

  const question: Question = getQuestionOfTheDay(questions)

  return {
    props: {
      question,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}

export default Home
