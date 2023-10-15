import { User } from '../models'

import { useFakeDatabase } from './use-fake-database'

type UserId = User['id']

const TABLE_NAME_KEY = 'users'

export const useUsersFromDatabase = () => {
  const { getTable, addRowInTable, deleteRowInTable, updateRowInTable } =
    useFakeDatabase()

  const users = getTable(TABLE_NAME_KEY)

  const addUser = (user: User) => {
    if (users.some((userDb) => userDb.email === user.email)) {
      throw new Error(`The provided email is already in use`)
    }

    addRowInTable(TABLE_NAME_KEY, user)
  }

  const deleteUser = (userId: UserId) => {
    if (!users.some((userDb) => userDb.id === userId)) {
      throw new Error(`User does not exist`)
    }

    deleteRowInTable(TABLE_NAME_KEY, userId)
  }

  const updateUser = (userId: UserId, data: Partial<User>) => {
    if (!users.some((userDb) => userDb.id === userId)) {
      throw new Error(`User does not exist to update`)
    }

    updateRowInTable(TABLE_NAME_KEY, userId, data)
  }

  return {
    users,
    addUser,
    deleteUser,
    updateUser,
  }
}
