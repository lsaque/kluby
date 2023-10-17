import React from 'react'

import styled from 'styled-components'

import { Typography } from './Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

interface DescriptionProps {
  title: string
  description: string | React.ReactNode
}

export const Description: React.FC<DescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <Typography
        $variant='body1'
        $fontWeight='fontWeightBold'
        $color='primary'
      >
        /&nbsp;{title}
      </Typography>
      <Typography $variant='body1' $color='text.secondary'>
        {description}
      </Typography>
    </Container>
  )
}
