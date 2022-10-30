export const enum Locale {
  EN = 'en',
  PT = 'pt',
}

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ToastType {
  ALERT = 'alert',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export type GameStatistics = {
  numberOfQuestions: number
  currentStreak: number
  bestStreak: number
  winnings: number
  winRate: number
}

export type GameState = {
  lastAnswer: string
  lastPlayTime: Date
}

export type ToastData = { message: string; type: ToastType | undefined }

export type Question = {
  id: string
  title: string
  options: string[]
  correctOption: string | string[]
  answer: string
  source: string
  link: string
  isFavorite?: boolean
}

export type Word = {
  id: string
  word: string
  pronunciation: string
  definition: string
  sentence: string
  source: string
  link: string
  isFavorite?: boolean
}
