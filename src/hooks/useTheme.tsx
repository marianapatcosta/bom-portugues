import React, {
  useEffect,
  useState,
  ReactNode,
  createContext,
  useContext,
} from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '../themes'
import { Theme } from '@/types'
import { COLLECTION_DARK_THEME } from '@/constants'
import { useLocalStorage } from './useLocalStorage'

type ThemeProviderProps = {
  children: ReactNode
}

type ThemeContextData = {
  isDarkTheme: boolean
  defineTheme: (isDarkTheme: boolean) => void
}

const ThemeContext = createContext({} as ThemeContextData)

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const { getStoredItem, saveItemInStorage } = useLocalStorage()

  const getStoredTheme = () => {
    const deviceTheme: boolean =
      window && window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedIsDarkTheme = getStoredItem<boolean>(COLLECTION_DARK_THEME) as boolean
    setIsDarkTheme(storedIsDarkTheme || deviceTheme)
  }

  const defineTheme = (isDarkTheme: boolean) => {
    setIsDarkTheme(isDarkTheme)
    saveItemInStorage<boolean>(COLLECTION_DARK_THEME, isDarkTheme)
  }

  useEffect(() => {
    getStoredTheme()
  }, [])

  return (
    <ThemeContext.Provider value={{ defineTheme, isDarkTheme }}>
      <ThemeProvider theme={themes[isDarkTheme ? Theme.DARK : Theme.LIGHT]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  return themeContext
}

export { ThemeContextProvider, useTheme }
