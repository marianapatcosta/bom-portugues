import type { Question } from '@/types'
import { createContext } from 'react'

export interface QuestionContextData {
  question: Question | null
  todaysAnswer: string | null
  setQuestion: (question: Question) => void
  setAnswer: (answer: string) => void
}

export const QuestionContext = createContext({} as QuestionContextData)
