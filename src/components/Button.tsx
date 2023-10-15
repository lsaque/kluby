import styled, { css } from 'styled-components'

import { PaletteVariants } from '../@types/variants'

type ButtonProps = {
  $variant?: 'outlined' | 'contained' | 'text'
  $fullWidth?: boolean
  $color?: PaletteVariants
  $rounded?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  width: max-content;
  height: max-content;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  &:disabled {
    opacity: 0.5;
  }

  ${({ $variant = 'text', $color, theme }) => {
    const color = $color
      ? theme.palette[$color].main
      : theme.palette.text.primary
    const contrastColor = $color
      ? theme.palette[$color].contrastText
      : theme.palette.text.secondary

    const sharedStyles = css`
      background-color: ${color};
      color: ${contrastColor};
      border: 0.1rem solid ${color};
    `

    if ($variant === 'contained') {
      return css`
        ${sharedStyles}

        &:hover {
          opacity: 0.8;
        }
      `
    }

    if ($variant === 'outlined') {
      return css`
        ${sharedStyles}
        background-color: ${color}10;
        color: ${color};

        &:hover {
          background-color: ${color}20;
        }
      `
    }

    return css`
      background-color: transparent;
      color: ${color};

      &:hover {
        background-color: ${color}10;
      }
    `
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 10rem;
    `}
`
