import styled, { css } from 'styled-components'

import { BreakPointVariants } from '../@types/variants'
import { from } from '../styles'

type ContainerProps = {
  $maxWidth?: BreakPointVariants
  $fullWidth?: boolean
  $flexDirection?: React.CSSProperties['flexDirection']
  $gap?: React.CSSProperties['gap']
  $padding?: React.CSSProperties['padding']
}
export const Container = styled.div<ContainerProps>`
  --base-size: 0.8rem;

  position: relative;
  display: flex;
  margin: 0 auto;

  flex-direction: ${({ $flexDirection = 'column' }) => $flexDirection};

  ${({ $gap }) =>
    !!$gap &&
    css`
      gap: calc(${$gap} * var(--base-size));
    `}

  ${({ $padding = 2 }) =>
    $padding &&
    css`
      padding: 0.8rem;

      ${from.sm} {
        padding: calc((${$padding} * var(--base-size)) / 2);
      }

      ${from.md} {
        padding: 0;
      }
    `}

  ${({ $maxWidth, theme }) =>
    $maxWidth &&
    css`
      max-width: calc(${theme.breakpoints[$maxWidth]} * 1px);
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      flex: 1;
      width: 100%;
    `}
`
