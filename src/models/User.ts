export class User {
  id: string
  fullName: string
  email: string
  password: string
  token: string

  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date

  constructor({
    fullName,
    email,
    password,
  }: Pick<User, 'fullName' | 'email' | 'password'>) {
    const id = crypto.randomUUID()

    this.id = id
    this.token = btoa(id)
    this.fullName = fullName
    this.email = email
    this.password = btoa(password)
    this.createdAt = new Date()
  }
}
