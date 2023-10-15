import React, { useLayoutEffect } from 'react'

import { Typography } from '../../../components'
import { useAuth } from '../../../hooks'

export function SignOutPage() {
  const { signOut } = useAuth()

  useLayoutEffect(() => {
    signOut()
  })

  return (
    <Typography $color='primary'>
      Logging out.... <br />
      You will return to sign in
    </Typography>
  )
}
