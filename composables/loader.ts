import type { Loader } from '~/utils/types'

export const useLoader = () => useState<Loader>('loader', () => ({ isShow: false, message: '' }))
