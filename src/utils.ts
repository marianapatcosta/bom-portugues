import {
  COLLECTION_GAME_STATE,
  COLLECTION_STATS,
  STORED_GAME_STATISTICS,
} from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { GameState, GameStatistics, Question } from '@/types'

const { getStoredItem, saveItemInStorage } = useLocalStorage()

export const updateGameStatistics = (isAnswerCorrect: boolean) => {
  const statistics = getStatistics()

  statistics.numberOfQuestions = statistics.numberOfQuestions + 1
  statistics.winnings = !isAnswerCorrect
    ? statistics.winnings
    : statistics.winnings + 1

  statistics.currentStreak = !isAnswerCorrect ? 0 : statistics.currentStreak + 1
  if (statistics.currentStreak > statistics.bestStreak) {
    statistics.bestStreak = statistics.currentStreak
  }

  saveItemInStorage(COLLECTION_STATS, statistics)
}

export const updateGameState = (answer: string) => {
  saveItemInStorage(COLLECTION_GAME_STATE, {
    lastAnswer: answer,
    lastPlayTime: new Date(),
  })
}

export const getStatistics = (): GameStatistics => {
  const storedStatistics: GameStatistics | undefined =
    getStoredItem(COLLECTION_STATS)

  if (storedStatistics) {
    return storedStatistics
  }

  const defaultStats = {} as GameStatistics

  STORED_GAME_STATISTICS.forEach((stat) => {
    defaultStats[stat as keyof GameStatistics] = 0
  })

  return defaultStats
}

export const getGameState = (): GameState | undefined => {
  const storedGameState: GameState | undefined = getStoredItem(
    COLLECTION_GAME_STATE
  )

  return storedGameState
}

const toClockString = (time: number): string => String(time).padStart(2, '0')

export const formatTime = (timeInMilliseconds: number): string => {
  // 1h = 36000ms
  const hours: string = toClockString(Math.floor(timeInMilliseconds / 3600000))
  // 1min = 60000ms
  const minutes: string = toClockString(
    Math.floor((timeInMilliseconds % 3600000) / 60000)
  )
  // 1s = 1000ms
  const seconds: string = toClockString(
    Math.floor(((timeInMilliseconds % 360000) % 60000) / 1000)
  ) // 1s = 1000ms
  return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

export const isToday = (someDate: Date): boolean => {
  const today = new Date()
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  )
}

export const getQuestionOfTheDay = (questions: Question[]): Question => {
  const start: Date = new Date(2022, 10)
  const today: Date = new Date()
  const differenceInDays = today.getDate() - start.getDate()

  return questions[differenceInDays % questions.length]
}

export const getRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex: number = getRandomNumber(0, index)
    ;[array[index], array[randomIndex]] = [array[randomIndex], array[index]]
  }
  return array
}
