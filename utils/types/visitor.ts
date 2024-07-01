export interface Resident {
  id32: string
  no_id: string
  full_name: string
  address: string
  photo: {
    id32: string
    name: string
    url: string
  }
  gender: {
    value: number
    text: string
  }
  doc_type: {
    value: string
    text: string
  }
}
export interface Visitor {
  id32: string
  no_id: string
  full_name: string
  address: string
  photo: {
    id32: string
    name: string
    url: string
  }
  gender: {
    value: number
    text: string
  }
  doc_type: {
    value: string
    text: string
  }
  resident: {
    id32: string
    full_name: string
  }
  vehicles: {
    id32: string
    license_plate_number: string
    vehicle_type: {
      id32: string
      name: string
    }
  }[]
}
