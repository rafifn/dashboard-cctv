export interface VehicleType {
  id32: string
  name: string
}

interface Person {
  full_name: string
  no_id: string
  id32: string
}

interface Snapshot {
  id32: string
  name: string
  url: string
}

export interface Vehicle {
  id32: string
  license_plate_number: string
  vehicle_type: VehicleType
  person: Person
  last_checkin_timestamp: number
  last_snapshot: Snapshot
}
