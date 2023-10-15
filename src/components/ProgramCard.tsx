import React from 'react'

import { Link, LinkProps, To } from 'react-router-dom'
import styled from 'styled-components'

import { from } from '../styles'

import { Typography } from './Typography'

const IconContainer = styled.div`
  --svg-size: 80%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0.5);
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.palette.primary.main};

    transition: all 0.3s;
  }

  svg {
    transition: all 0.3s;
    width: var(--svg-size);
    height: var(--svg-size);
  }

  ${from.sm} {
    --svg-size: 24rem;
    &::before {
      width: 5rem;
      height: 5rem;
    }
  }
`

const Container = styled.button.attrs({
  as: Link,
})`
  border-radius: 0.5rem;
  padding: 1.6rem;
  gap: 1.6rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 0.1rem solid ${({ theme }) => theme.palette.divider};

  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0.8rem 2.4rem ${({ theme }) => theme.palette.common.black}10;

    ${IconContainer} {
      &::before {
        opacity: 1;
        transform: scale(3);
      }
      svg {
        scale: 1.15;
      }
    }
  }
`

interface ProgramCardProps extends Omit<LinkProps, 'title'> {
  icon: React.ReactNode
  title: React.ReactNode
  to: To
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  icon,
  title,
  to,
  type = 'button',
  ...rest
}) => {
  return (
    <Container {...rest} type={type} to={to}>
      <IconContainer>{icon}</IconContainer>
      <Typography as='p' $variant='h6' $textAlign='center'>
        {title}
      </Typography>
    </Container>
  )
}
