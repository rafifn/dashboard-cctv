export type { Location } from './location'
export type { User, Role } from './user'
export type { Vehicle, VehicleType, VehicleVerifiCationResponse } from './vehicle'
export type { Visitor, Resident } from './visitor'

export interface Loader {
  isShow: boolean
  message?: string
  start(message?: string): void
  finish(): void
}
export interface MapCamera {
  title: string
  coords: string
  shape: string
}
export interface Camera {
  id32: string
  channel_id: string
  name: string
  description: string
  is_active: string
  order: number
  hls_url: string
  is_gate: boolean
  location: {
    id32: string
    name: string
    description: string | null
  }
  icon_rotation: number
  coordinate: {
    lat: number
    lng: number
  }
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
