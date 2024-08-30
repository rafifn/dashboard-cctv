import consola from 'consola'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig()
  const body = await readBody(e)
  const options = {
    method: 'POST',
    baseURL: config.apiEocortexAlarmBaseUrl,
    headers: {
      'content-type': 'application/json',
      // eslint-disable-next-line @stylistic/quote-props
      authorization: `${config.apiEocortexToken}`,
    },
    body,
  }
  consola.log(options)

  return $fetch('/archive_events', options).catch((err) => {
    const response = {
      statusCode: err.response?.status ?? 500,
      statusMessage: err?.data?.error?.message ?? 'Terjadi Kesalahan',
      data: err.data?.message ?? 'Data Tidak Ditemukan',
    }
    consola.error(JSON.stringify({ request: options, response }), '\n')
    throw createError(response)
  })
})
