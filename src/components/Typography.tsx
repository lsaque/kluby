import { ReactNode, createElement } from 'react'

import styled, { DefaultTheme, css } from 'styled-components'

import { PaletteVariants } from '../@types/variants'

type FontWeightVariants = keyof Pick<
  DefaultTheme['typography'],
  | 'fontWeightBold'
  | 'fontWeightExtraBold'
  | 'fontWeightLight'
  | 'fontWeightMedium'
  | 'fontWeightNormal'
  | 'fontWeightSemiBold'
>

type TagVariants = keyof Omit<
  DefaultTheme['typography'],
  | 'allVariants'
  | 'fontFamily'
  | 'fontSize'
  | FontWeightVariants
  | 'htmlFontSize'
>

type TextVariants = 'text.primary' | 'text.secondary'

type ColorVariants = PaletteVariants | TextVariants

type TypographyProps = {
  $variant?: TagVariants
  $fontWeight?: FontWeightVariants
  $color?: ColorVariants
  $textAlign?: React.CSSProperties['textAlign']
  children: ReactNode
}

const TypographyElement = ({
  $variant = 'body1',
  children,
  ...props
}: TypographyProps) => {
  const tag = $variant.includes('body') ? 'p' : $variant
  return createElement(tag, props, children)
}

export const Typography = styled(TypographyElement)`
  ${({
    theme,
    $variant = 'body1',
    $fontWeight = 'fontWeightNormal',
    $color = 'text.primary',
    $textAlign = 'left',
  }) => css`
    line-height: 1.5;
    font-size: ${theme.typography[$variant].fontSize};
    font-weight: ${theme.typography[$fontWeight]};
    text-align: ${$textAlign};

    color: ${() => {
      if ($color === 'text.primary') return theme.palette.text.primary
      if ($color === 'text.secondary') return theme.palette.text.secondary
      return theme.palette[$color].main
    }};
  `}
`
