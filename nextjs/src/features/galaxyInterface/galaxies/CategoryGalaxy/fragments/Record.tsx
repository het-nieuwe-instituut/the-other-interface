import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { GridItem, Flex } from '@chakra-ui/react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { RecordText } from './RecordText'
import { useRouter, useSearchParams } from 'next/navigation'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

type Props = {
  record: ZoomLevel2Type & {
    position: Position
    category: CloudCategory
  }
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, thumbnail, category, position, title } = record
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const router = useRouter()

  const handleClick = () => {
    const searchParam = searchParams?.get('search')
    const search = searchParam ? `?search=${searchParam}` : ''
    let url = `/detail/${category}/${id}${search}`
    url = addLocaleToUrl(url, lang)

    router.push(url)
  }

  return (
    <GridItem position="relative">
      <Flex
        position="absolute"
        style={{ ...position }}
        width="70%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="5px"
        cursor={'pointer'}
        onClick={handleClick}
        _hover={{ transform: 'scale(1.05)' }}
        transition="all .4s ease-in-out"
      >
        <ResponsiveImage
          src={thumbnail}
          alt={title ?? ''}
          maxHeight="calc(100% - 2.6vw - 7px)" // where 2.6vw are a texts' line heights, 15px are gaps
        />

        <RecordText title={title} categoryType={category} />
      </Flex>
    </GridItem>
  )
}
