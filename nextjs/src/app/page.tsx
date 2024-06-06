import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { getLocaleFromParams } from '@/features/shared/helpers/getLocaleFromParams'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getMetaDataTranslations } from 'src/getMetaDataTranslations'

export async function generateMetadata(props: any): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const { isEnabled } = draftMode()
  const locale = getLocaleFromParams(searchParams)
  const api = initApiServerService()
  const homepage = await api?.homepage({ locale })

  return <HomepageContainer homepage={homepage} draftMode={isEnabled} />
}
