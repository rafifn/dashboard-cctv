import { cleanUpQuery } from '~/utils/helpers'

export const useTable = () => {
  const route = useRoute()
  const router = useRouter()
  const currentQuery = ref<Record<string, unknown>>({
    ...route.query,
    page: route.query.page ? route.query.page : '1',
    page_size: route.query.size ? route.query.page_size : '10',
    search: (route.query?.search ?? '') as string,
  })

  const handleApplyFilters = (form: Record<string, unknown>) => {
    router.push({
      path: route.path,
      query: { ...cleanUpQuery(form), page: 1 },
    })
  }
  const handleSearch = (q: string) => {
    router.push({
      path: route.path,
      query: { ...route.query, search: q, page: 1 },
    })
  }
  const handleUpdatePage = (page: string) => {
    router.push({
      path: route.path,
      query: { ...route.query, page },
    })
  }
  const handleUpdateSize = (page_size: string) => {
    router.push({
      path: route.path,
      query: { ...route.query, page: 1, page_size },
    })
  }

  watch(
    () => route.query,
    (q) => {
      currentQuery.value = { ...q, page: q.page || '1', page_size: q.page_size || '10' }
      // eslint-disable-next-line @stylistic/comma-dangle
    }
  )

  return { currentQuery, handleSearch, handleApplyFilters, handleUpdatePage, handleUpdateSize }
}
