import consola from 'consola'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig()
  const body = await readBody(e)
  const options = {
    method: 'POST',
    baseURL: config.apiPartyEndpointsKorlantasUrl,
    headers: {
      'content-type': 'application/json',
      // eslint-disable-next-line @stylistic/quote-props
      authorization: `Bearer ${config.apiPartyEndpointsKorlantasToken}`,
    },
    body,
  }
  consola.log(options)

  return $fetch('/kendaraan/get-info', options).catch((err) => {
    consola.log(err)
    const response = {
      statusCode: err.response?.status ?? 500,
      statusMessage: err?.data?.error?.message ?? 'Terjadi Kesalahan',
      data: err.data,
    }

    consola.error(JSON.stringify({ request: options, response }), '\n')
    throw createError(response)
  })
})
