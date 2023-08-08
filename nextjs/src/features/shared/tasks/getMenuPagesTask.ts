import { initApiClient } from '../utils/api'

export async function getMenuPagesTask(locale: string) {
  try {
    const api = initApiClient()
    const menupages = await api?.menuPages({ locale })

    return {
      menupages,
    }
  } catch (e) {
    console.log(e, 'Error accured in menu pages task')
  }
}
