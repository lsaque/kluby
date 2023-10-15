import styled from 'styled-components'

import { from } from '../../../styles'

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`
export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const FieldsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.6rem;

  ${from.md} {
    flex-direction: row;
  }
`
