export interface Vehicle {
  id32: string
  license_plate_number: string
  vehicle_type: {
    id32: string
    name: string
  }
  owner: {
    full_name: string
    no_id: string
    id32: string
  }
}
export interface VehicleType {
  id32: string
  name: string
}
