import { Task, User } from '../models'

import { useLocalStorage } from './use-local-storage'

type DatabaseTypes = {
  users: User[]
  tasks: Task[]
}

type TableKeys = keyof DatabaseTypes

const INITIAL_DATABASE: DatabaseTypes = {
  users: [],
  tasks: [],
}

const FAKE_DATABASE_KEY = 'fake_database'

export const useFakeDatabase = () => {
  const [dataBase, setDataBase] = useLocalStorage<DatabaseTypes>(
    FAKE_DATABASE_KEY,
    INITIAL_DATABASE
  )

  const getTable = <T extends TableKeys>(tableName: T) => {
    if (Object.prototype.hasOwnProperty.call(dataBase, tableName)) {
      return dataBase[tableName]
    } else {
      throw new Error(`Table '${tableName}' does not exist in the database.`)
    }
  }

  const addRowInTable = <T extends TableKeys>(
    tableName: T,
    data: DatabaseTypes[T][number]
  ) => {
    setDataBase({
      ...dataBase,
      [tableName]: [...dataBase[tableName], data],
    })
  }

  const deleteRowInTable = <T extends TableKeys>(
    tableName: T,
    id: DatabaseTypes[T][number]['id']
  ) => {
    setDataBase({
      ...dataBase,
      [tableName]: dataBase[tableName].filter((row) => row.id !== id),
    })
  }

  const clearTable = <T extends TableKeys>(tableName: T) => {
    setDataBase({
      ...dataBase,
      [tableName]: INITIAL_DATABASE[tableName],
    })
  }

  const updateRowInTable = <T extends TableKeys>(
    tableName: T,
    id: DatabaseTypes[T][number]['id'],
    data: Partial<DatabaseTypes[T][number]>
  ) => {
    setDataBase({
      ...dataBase,
      [tableName]: dataBase[tableName].map((row) => {
        if (row.id === id) {
          return {
            ...row,
            ...data,
            updatedAt: new Date(),
          }
        } else {
          return row
        }
      }),
    })
  }

  const clearDatabase = () => setDataBase(INITIAL_DATABASE)

  return {
    dataBase,
    getTable,
    addRowInTable,
    deleteRowInTable,
    clearTable,
    updateRowInTable,
    clearDatabase,
  }
}
