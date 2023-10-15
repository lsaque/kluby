import React, { useLayoutEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography } from '../../components'
import { useAuth } from '../../hooks'
import { ROUTES } from '../../router'

export function AppError() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  useLayoutEffect(() => {
    signOut()
    navigate(ROUTES.AUTH.ROOT)
  })

  return (
    <Typography $color='error'>
      App error. <br />
      You will return to sign in
    </Typography>
  )
}
