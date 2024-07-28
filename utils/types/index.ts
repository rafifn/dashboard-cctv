export type { Location } from './location'
export type { User, Role } from './user'
export type { Vehicle, VehicleType } from './vehicle'
export type { Visitor, Resident } from './visitor'

export interface Camera {
  id32: string
  channel_id: string
  name: string
  description: string
  is_active: string
  order: number
  hls_url: string
}
export interface Profile {
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
