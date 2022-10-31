import { GitHub, Linkedin, Portfolio } from './assets/icons'

const DATABASE_NAME = '@bom-portugues'
// @app:collection;
export const COLLECTION_LOCALE = `${DATABASE_NAME}:locale`
export const COLLECTION_DARK_THEME = `${DATABASE_NAME}:dark-theme`
export const COLLECTION_STATS = `${DATABASE_NAME}:stats`
export const COLLECTION_GAME_STATE = `${DATABASE_NAME}:game-state`
export const COLLECTION_FAVORITE_QUESTIONS = `${DATABASE_NAME}:favorite-questions`
export const COLLECTION_FAVORITE_WORDS = `${DATABASE_NAME}:favorite-words`

export const GAME_STATISTICS: string[] = [
  'numberOfQuestions',
  'currentStreak',
  'bestStreak',
]

export const STORED_GAME_STATISTICS: string[] = [...GAME_STATISTICS, 'winnings']

export const GENERAL_ANSWER_OPTIONS: string[] = ['all', 'none']

export const BOM_PORTUGUES_URL: string =
  'https://marianapatcosta.github.io/bom-portugues/'

export const DEFAULT_AUTODISMISS_TIME = 2000 // in ms
export const TOAST_OFFSET = 4

export const LINKS: { label: string; icon: React.FC; url: string }[] = [
  {
    label: 'GitHub',
    icon: GitHub,
    url: 'https://github.com/marianapatcosta',
  },
  {
    label: 'Linkedin',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/marianapatcosta/',
  },
  {
    label: 'personalWebsite',
    icon: Portfolio,
    url: 'https://mariana-costa.web.app',
  },
]

export const FLIP_ANIMATION_DURATION: number = 0.9 // in seconds
export const STROKE_ANIMATION_DURATION = 0.4 // in seconds
export const FILL_ANIMATION_DURATION = 0.3 // in seconds
export const SYMBOL_ANIMATION_DURATION = 0.2 // in seconds

export const TIME_TO_OPEN_MODAL = 3000 // in milliseconds
