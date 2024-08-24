import consola from 'consola'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig()
  const body = await readBody(e)
  const options = {
    method: 'POST',
    baseURL: config.apiPartyEndpointsDukcapilUrl,
    headers: {
      'content-type': 'application/json',
      // eslint-disable-next-line @stylistic/quote-props
      authorization: `Bearer ${config.apiPartyEndpointsDukcapilToken}`,
    },
    body,
  }
  consola.log(options)

  return $fetch('/kependudukan/public/api/get-info-nik', options).catch((err) => {
    const response = {
      statusCode: err.response?.status ?? 500,
      statusMessage: err?.data?.error?.message ?? 'Terjadi Kesalahan',
      data: err.data,
    }

    consola.error(JSON.stringify({ request: options, response }), '\n')
    throw createError(response)
  })
})
