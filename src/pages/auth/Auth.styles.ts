import styled from 'styled-components'

import { from } from '../../styles'

export const Layout = styled.div`
  --padding: ${({ theme }) => theme.mixins.root.padding}rem;

  display: flex;
  flex-direction: column-reverse;
  padding: calc(var(--padding) / 2);
  gap: calc(var(--padding) / 2);
  height: 100dvh;

  background-color: ${({ theme }) => theme.palette.background.default};

  overflow: auto;

  ${from.md} {
    display: grid;
    padding: var(--padding);
    gap: var(--padding);
    grid-template-columns: repeat(2, 1fr);
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${from.md} {
    justify-content: center;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  --svg-size: 26rem;

  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: var(--svg-size);
    height: var(--svg-size);
  }

  ${from.md} {
    --svg-size: 45rem;
  }
`
