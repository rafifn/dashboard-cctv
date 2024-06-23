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
