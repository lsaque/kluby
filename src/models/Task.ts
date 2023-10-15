import { User } from './User'

export class Task {
  id: string
  userId: User['id']
  name: string
  description?: string
  isCompleted: boolean

  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date

  constructor(
    userId: User['id'],
    { name, description }: Pick<Task, 'name' | 'description'>
  ) {
    this.id = crypto.randomUUID()
    this.userId = userId
    this.name = name
    this.description = description
    this.createdAt = new Date()
    this.isCompleted = false
  }
}
