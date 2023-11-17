'use client'
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'
import { getPeoplePathForTriplyRecordId } from '@/features/shared/utils/links'
import { keyExtractor } from '@/features/shared/utils/lists'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import { Box, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  Author,
  ComponentCoreTimeframe,
  EnumComponentcorepublicationdateDisplaytype,
  EnumComponentmodulesbuttonsmoduleButtonstyle,
  EnumTriplyrecordType,
  StoryEntity,
} from 'src/generated/graphql'
import { usePresenter } from './usePresenter'

type Props = {
  story: StoryEntity | null
}

export const StoryMeta: React.FC<Props> = ({ story }) => {
  const { commonT } = usePresenter()

  // const linkedPeopleRecords = story?.attributes?.triplyRecords?.data.filter(
  //   d => d.attributes?.type === EnumTriplyrecordType.People && !!d.attributes.recordId
  // )

  return (
    <Box>
      <Box marginBottom={'md'}>
        <Text textStyle={'micro'} marginBottom={1}>
          {commonT.t('published', {
            date: story?.attributes?.publicationDate
              ? formatPublicationDate(
                  story?.attributes?.publicationDate.displayType,
                  story?.attributes?.publicationDate.date
                )
              : formatPublicationDate(
                  EnumComponentcorepublicationdateDisplaytype.Year,
                  story?.attributes?.publishedAt
                ),
          })}
        </Text>
        {/* {story.attributes?.author?.data?.attributes && ( */}
        {/* <Text textStyle={'micro'}>{formatAuthor(story.attributes?.author?.data?.attributes)}</Text> */}
        {/* )} */}
      </Box>
      {/* 
      {story.attributes?.shortDescription && (
        <Text textStyle={'micro'} marginBottom={'md'}>
          {story.attributes?.shortDescription}
        </Text>
      )} */}

      {/* {!!story.attributes?.timeframe && (
        <Box marginBottom={'md'}>
          <Text textStyle={'h5'} mb={1}>
            {capitalizeFirstLetter(storiesT.t('time') ?? '')}
          </Text>
          <Text textStyle={'micro'}>
            <NextLink href={'/timeframes'} passHref>
              <Link>{formatTimeframe(story.attributes?.timeframe)}</Link>
            </NextLink>
          </Text>
        </Box>
      )} */}
      {/* 
      {!!linkedPeopleRecords?.length && (
        <Box marginBottom={'md'}>
          <Text textStyle={'h5'} mb={1}>
            {capitalizeFirstLetter(storiesT.t('people') ?? '')}
          </Text>

          <Box display={'flex'} flexDirection={'row'}>
            {linkedPeopleRecords.map((people, index, array) => {
              const hasItemAfter = array.length - 1 !== index
              return (
                <Text textStyle={'micro'} key={keyExtractor(people, index, array)} mr={1}>
                  <NextLink
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    href={getPeoplePathForTriplyRecordId(people.attributes!.recordId)}
                    passHref
                  >
                    <Link>
                      {people.attributes?.people?.name}
                      {hasItemAfter && ','}
                    </Link>
                  </NextLink>
                </Text>
              )
            })}
          </Box>
        </Box>
      )} */}

      {/* {!!story.attributes?.locations?.data.length && (
        <Box marginBottom={'md'}>
          <Text textStyle={'h5'} mb={1}>
            {capitalizeFirstLetter(storiesT.t('locations') ?? '')}
          </Text>

          <Box display={'flex'} flexDirection={'row'}>
            {story.attributes?.locations?.data.map((item, index, array) => {
              const hasItemAfter = array.length - 1 !== index
              return (
                <Text textStyle={'micro'} key={keyExtractor(item, index, array)} mr={1}>
                  <NextLink href={`/locations/${item.attributes?.city}`} passHref>
                    <Link>
                      {item.attributes?.city}
                      {hasItemAfter && ','}
                    </Link>
                  </NextLink>
                </Text>
              )
            })}
          </Box>
        </Box>
      )} */}
      {/* {story.attributes?.storyLinks && (
        <ButtonsGrid
          buttonLayoutStyle={{
            whiteSpace: 'normal',
            wordWrap: 'break-word',
          }}
          flexDirection="column"
          buttons={story.attributes.storyLinks.buttons ?? []}
          buttonStyle={EnumComponentmodulesbuttonsmoduleButtonstyle.Default}
        ></ButtonsGrid>
      )} */}
    </Box>
  )
}

function formatPublicationDate(
  type?: EnumComponentcorepublicationdateDisplaytype | null,
  date?: string | null
) {
  if (date && type === EnumComponentcorepublicationdateDisplaytype.Year) {
    return formatDate(date, 'YYYY')
  }

  if (date && type === EnumComponentcorepublicationdateDisplaytype.Date) {
    return formatDate(date, 'DD/MM/YYYY')
  }

  return undefined
}

// function formatTimeframe(timeframe: ComponentCoreTimeframe) {
//   const timeframes = [timeframe.yearStart, timeframe.yearEnd].filter(item => !!item)
//   return timeframes.join(' - ')
// }

// function formatAuthor(author: Author) {
//   return `${capitalizeFirstLetter(author.firstName)}${
//     author.insertion ? ' ' + author.insertion : ''
//   }${' ' + capitalizeFirstLetter(author.lastName)}`
// }
