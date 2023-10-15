import styled from 'styled-components'

import { from } from '../../styles'

export const AppLayout = styled.div`
  --padding: ${({ theme }) => theme.mixins.root.padding}rem;

  position: relative;
  display: flex;
  flex: 1;

  padding: calc(var(--padding) / 2);

  height: auto;
  min-height: 100dvh;

  background-color: ${({ theme }) => theme.palette.background.default};

  ${from.md} {
    padding: var(--padding);
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Header = styled.header`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const AppPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  ${from.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`
