import { Lamp, LampFilled } from '@/assets/icons'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  StyledToggleButtonWrapper,
} from './styles'

const ToggleThemeButton = () => {
  const { isDarkTheme, defineTheme } = useTheme()

  const { t } = useTranslation(['common'])

  return (
    <StyledToggleButtonWrapper
      aria-label={t('toggleTheme', {
        theme: isDarkTheme ? t('light') : t('dark'),
      })}
      title={t('theme', {
        theme: isDarkTheme ? t('light') : t('dark'),
      })}
      isDarkTheme={isDarkTheme}
      icon={isDarkTheme ? LampFilled : Lamp}
      onClick={() => defineTheme(!isDarkTheme)}
    />
  )
}

export default ToggleThemeButton
