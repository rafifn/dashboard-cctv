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
export interface VehicleVerifiCationResponse {
  id: string
  nopol: string
  nopols_id1: string
  nopol_1: string
  nopols_id2: string
  nopol_2: string
  nopols_id3: string
  nopol_3: string
  bpkb: unknown
  nama: string
  nik: string
  alamat: string
  merks_id: string
  merks_text: string
  tipe: unknown
  no_rangka: string
  no_mesin: string
  warna: string
  thn: string
  ran_dinas: number
  jumlah_cc: string
  noreg: string
  jenis_materiil: string
  staff: string
}
