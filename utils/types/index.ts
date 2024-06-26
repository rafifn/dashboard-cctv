export type { Location } from './location'
export type { Resident } from './resident'
export type { User, Role } from './user'
export type { Vehicle, VehicleType } from './vehicle'

export interface Camera {
  id32: string
  channel_id: string
  name: string
  description: string
  is_active: string
  order: number
  hls_url: string
}
