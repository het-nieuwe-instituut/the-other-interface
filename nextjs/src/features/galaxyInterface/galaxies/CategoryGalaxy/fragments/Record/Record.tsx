import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { GridItem, Flex } from '@chakra-ui/react'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Text } from '@chakra-ui/react'
import { RecordText } from '../RecordText'
import { useRouter } from 'next/navigation'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { tooltipMapper } from './tooltipMapper'
import { useRecordHoverPresenter } from './useRecordHoverPresenter'

type Props = {
  record: RecordProps
}

type RecordProps = ZoomLevel2Type & {
  position: Position
  category: CloudCategory
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, category } = record
  const { lang, search } = useZoom2Params()
  const { data } = useRecordHoverPresenter(id, category)

  const tooltipData = tooltipMapper(data)

  return (
    <GridItem position="relative">
      {tooltipData === null ? (
        RecordData(record, lang, search)
      ) : (
        <Tooltip
          label={
            <div>
              <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'700'}>
                {tooltipData?.title}
              </Text>
              <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'400'}>
                {tooltipData?.description}
              </Text>
            </div>
          }
        >
          {RecordData(record, lang, search)}
        </Tooltip>
      )}
    </GridItem>
  )
}

const RecordData = (record: RecordProps, lang?: string | null, search?: string) => {
  const { id, thumbnail, category, position, title } = record
  const router = useRouter()

  const handleClick = () => {
    const searchParam = search ? `?search=${search}` : ''
    let url = `/detail/${category}/${id}${searchParam}`
    url = addLocaleToUrl(url, lang)

    router.push(url)
  }

  return (
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
  )
}
