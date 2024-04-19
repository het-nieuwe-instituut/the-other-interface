import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { GridItem, Flex } from '@chakra-ui/react'
import { SearchCategory } from '@/features/shared/utils/categories'

import { RecordText } from './RecordText'
import { useRouter } from 'next/navigation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { RecordType } from './types'

type Props = {
  record: RecordType & {
    position: Position
    category: SearchCategory
  }
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, thumbnail, category, position, title } = record
  const { lang, search } = useZoom2Params()

  const router = useRouter()

  const handleClick = () => {
    const searchParam = search ? `?search=${search}` : ''
    let url = `/detail/${category}/${id}${searchParam}`
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
          size={'16vw'}
          css={{
            flex: `1 1 calc(100% - 2.6vw - 7px)`,
          }}
          disableRightClick
        />

        <RecordText title={title} categoryType={category} />
      </Flex>
    </GridItem>
  )
}
