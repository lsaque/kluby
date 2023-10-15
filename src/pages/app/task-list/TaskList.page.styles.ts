import styled from 'styled-components'

import { from } from '../../../styles'

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const Heading = styled.div`
  display: grid;
  align-items: flex-end;

  gap: 1.6rem;

  ${from.md} {
    grid-template-columns: 1fr auto;
  }
`
