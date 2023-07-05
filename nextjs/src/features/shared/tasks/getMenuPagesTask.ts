import ApiClient from '@/features/graphql/api'

export async function getMenuPagesTask(locale: string) {
  try {
    const menupages = await ApiClient?.menuPages({ locale })

    return {
      menupages,
    }
  } catch (e) {
    console.log(e, 'Error accured in menu pages task')
  }
}
