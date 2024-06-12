import moment from 'moment'
import 'moment/dist/locale/id'

export const formatDateFromUTC = (dateTime: string | undefined, format = 'DD-MM-YYYY HH:mm:ss') => {
  const now = new Date()
  return moment
    .utc(dateTime || now)
    .locale('id')
    .format(format)
}
