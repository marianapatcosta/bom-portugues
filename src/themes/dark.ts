import common from './common'

export type ThemeType = typeof dark

export const dark = {
  ...common,
  colors: {
    ...common.colors,
    primary: '#080942',
    secondary: '#231c69',
    font: '#ffffff',
    shadow: 'rgba(0,0,0,0.7)',
  },
}
