import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  --switch-height: 2.4rem;
  --switch-width: calc(var(--switch-height) * 1.76);
  --switch-internal-circle-size: calc(var(--switch-height) * 0.76);
  --switch-internal-circle-displacement: calc(var(--switch-height) * 0.11);

  display: flex;
  justify-content: center;
  align-items: center;
`

const Slider = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  background-color: ${({ theme }) => theme.palette.divider};

  transition: 0.3s;

  &:before {
    content: '';

    position: absolute;
    bottom: var(--switch-internal-circle-displacement);
    left: var(--switch-internal-circle-displacement);

    width: var(--switch-internal-circle-size);
    height: var(--switch-internal-circle-size);
    background-color: ${({ theme }) => theme.palette.common.white};

    transition: 0.4s;
  }

  &.round {
    border-radius: var(--switch-height);

    &:before {
      border-radius: 50%;
    }
  }
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: var(--switch-height);
  width: var(--switch-width);
`

const Input = styled.input`
  border-radius: var(--switch-height);
  width: 100%;
  height: 100%;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.palette.primary.main};

    &:before {
      transform: translateX(var(--switch-internal-circle-size));
    }
  }
`

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>

export const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  return (
    <Container>
      <Label htmlFor={rest.id}>
        <Input {...rest} type='checkbox' />
        <Slider className='round' />
      </Label>
    </Container>
  )
}
