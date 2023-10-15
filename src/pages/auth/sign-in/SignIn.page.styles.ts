import styled from 'styled-components'

import { from } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  width: 100%;

  ${from.md} {
    max-width: 50rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  text-align: center;
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.6rem;
`

export const ErrorContainer = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.palette.error.main}10;
  border-radius: 1rem;
  padding: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.error.main};
`
