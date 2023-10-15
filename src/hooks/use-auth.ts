import { SignInSchemaTypes } from '../pages'

import { useSessionStorage, useUsersFromDatabase } from '.'

const TOKEN_KEY = 'token'

export const useAuth = () => {
  const { users } = useUsersFromDatabase()
  const [token, setToken] = useSessionStorage<string | null>(TOKEN_KEY, null)

  const signOut = () => setToken(null)

  const signIn = (payload: SignInSchemaTypes) => {
    const userDb = users.find((userDb) => userDb.email === payload.email)

    if (!userDb) throw new Error('The email or password provided is invalid')

    if (btoa(payload.password) !== userDb.password) {
      throw new Error('Password provided is invalid')
    }

    setToken(userDb.token)
  }

  return {
    signIn,
    signOut,
    isSignedIn: Boolean(token),
    setToken,
    token,
  }
}
