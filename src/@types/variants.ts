import { DefaultTheme } from 'styled-components'

export type PaletteVariants = keyof Omit<
  DefaultTheme['palette'],
  'common' | 'background' | 'divider' | 'grey' | 'text'
>

export type BreakPointVariants = keyof DefaultTheme['breakpoints']
