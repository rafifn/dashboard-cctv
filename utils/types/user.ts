export interface User {
  id: number
  first_name: string
  last_name: string
  username: string
  role: {
    id: number
    name: string
  }
  last_login: string
  is_active: boolean
  date_joined: string
}
export interface Role {
  id: number
  name: string
}
