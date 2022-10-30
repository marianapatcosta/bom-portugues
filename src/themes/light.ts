import common from './common'

export type ThemeType = typeof light

export const light = {
  ...common,
  colors: {
    ...common.colors,
    primary: '#f4f4f4',
    secondary: '#231c69',
    font: '#1f1f1f',
    shadow: 'rgba(0,0,0,0.3)',
  },
}
