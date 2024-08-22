import moment from 'moment'
import 'moment/dist/locale/id'

export const formatDateFromUTC = (dateTime: string | undefined, format = 'DD-MM-YYYY HH:mm:ss') => {
  const now = new Date()
  return moment
    .utc(dateTime || now)
    .utcOffset(7)
    .locale('id')
    .format(format)
}
export const cleanUpQuery = (dirtyQuery: Record<string, unknown>): Record<string, unknown> => {
  const query = { ...dirtyQuery }
  Object.entries(query).forEach(([k, v]) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    if ((Array.isArray(v) && !v.length) || v === null || v === undefined || v === '') delete query[k]
  })
  return query
}
export const digitOnly = (val: string) => {
  return val.replace(/[^\d]/g, '')
}
export const transformApi = (route = '', config: RuntimeConfig): Service => {
  if (!route || !route.startsWith('/api')) return { baseURL: '', endpoint: '', isPublic: false }

  const isPublic = route.startsWith('/api/public')
  const api = route.replace(/(\/api(\/public)?)/g, '')
  const service = api.split('/')[1]
  const endpoint = api.replace(`/${service}`, '')
  const baseUrlKey = `apiHost${service.charAt(0).toUpperCase()}${service.slice(1)}`

  return { baseURL: config[baseUrlKey], endpoint, isPublic }
}
