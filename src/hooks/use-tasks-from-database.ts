import { Task } from '../models'

import { useFakeDatabase } from './use-fake-database'
import { useMyAccount } from './use-my-account'

type TaskId = Task['id']

const TABLE_NAME_KEY = 'tasks'

export const useTasksFromDatabase = () => {
  const me = useMyAccount()

  const { getTable, addRowInTable, deleteRowInTable, updateRowInTable } =
    useFakeDatabase()

  const tasks = getTable(TABLE_NAME_KEY)
  const myTasks = tasks
    .filter((task) => task.userId === me.id)
    .sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
    .reverse()

  const addTask = (task: Task) => {
    if (myTasks.some((taskDb) => taskDb.id === task.id)) {
      throw new Error(`Task already exists in ${me.fullName} account`)
    }

    addRowInTable(TABLE_NAME_KEY, task)
  }

  const updateTask = (taskId: TaskId, data: Partial<Task>) => {
    if (!myTasks.some((taskDb) => taskDb.id === taskId)) {
      throw new Error(`Task does not exist in ${me.fullName} account`)
    }

    updateRowInTable(TABLE_NAME_KEY, taskId, data)
  }

  const deleteTask = (taskId: TaskId) => {
    if (!myTasks.some((taskDb) => taskDb.id === taskId)) {
      throw new Error(`Task does not exist in ${me.fullName} account`)
    }

    deleteRowInTable(TABLE_NAME_KEY, taskId)
  }

  return {
    myTasks,
    addTask,
    deleteTask,
    updateTask,
  }
}
