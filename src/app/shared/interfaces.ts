export interface Error {
  path: string
  message: string
}

export interface User {
  email: string
  username?: string
  password?: string
}
