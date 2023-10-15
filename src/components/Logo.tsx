import React from 'react'

import { useCompany } from '../hooks'

import { Typography } from './Typography'

export const Logo = () => {
  const company = useCompany()

  return (
    <Typography $variant='h1' $fontWeight='fontWeightBold'>
      {company.project.name}
      <Typography
        as='span'
        $variant='caption'
        $color='text.secondary'
        style={{ marginLeft: 6 }}
      >
        by {company.name}
      </Typography>
    </Typography>
  )
}
