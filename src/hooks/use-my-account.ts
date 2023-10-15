import { useMemo } from 'react'

import { useAuth } from './use-auth'
import { useUsersFromDatabase } from './use-users-from-database'

export const useMyAccount = () => {
  const { token } = useAuth()
  const { users } = useUsersFromDatabase()

  const me = useMemo(() => {
    const user = users.find((userDb) => userDb.token === token)

    if (!user) throw new Error('User is not authenticated')

    return user
  }, [token, users])

  return me
}
