'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Box } from '@chakra-ui/react'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { RecordHeader } from '@/features/shared/components/Record/RecordHeader/RecordHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { ScrollToContent } from '../../utils/utils'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { StoryMeta } from '@/features/shared/components/Meta/StoryMeta/StoryMeta'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components:
    | NonNullable<
        NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
      >['components']
    | NonNullable<
        NonNullable<StoryByIdQuery['storiesByLocale']['data']>[0]['attributes']
      >['components']
    | null
}
interface Props {
  editorialData: DetailpageEditorialLayer | null
  category: string
}

const CATEGORIES_TO_SHOW_EDITORIAL = ['objects', 'publications', 'people', 'archives']

export const DetailpageContainer: React.FC<Props> = ({ editorialData, category }) => {
  const { scrollPosition } = useScroll()

  const Header = CATEGORIES_TO_SHOW_EDITORIAL.includes(category) ? (
    <RecordHeader />
  ) : (
    <PageHeader
      showPointer={scrollPosition < 750}
      handleClick={ScrollToContent}
      title={editorialData?.title || undefined}
      preface={editorialData?.description || undefined}
    />
  )

  const Meta = category === CATEGORIES.stories ? <StoryMeta story={{}} /> : null
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer components={editorialData.components} Header={Header} Meta={Meta} />
      )}
    </Box>
  )
}
