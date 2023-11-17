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

type Story = StoryEntity
type Props = {
  isDraftMode?: boolean
}

export const StoryMeta: React.FC<Props> = ({ isDraftMode }) => {
  const commonT = useTypeSafeTranslation('common')
  const storiesT = useTypeSafeTranslation('stories')

  const { story } = usePresenter(isDraftMode)

  // const linkedPeopleRecords = story?.attributes?.triplyRecords?.data.filter(
  //   d => d.attributes?.type === EnumTriplyrecordType.People && !!d.attributes.recordId
  // )

  return (
    <Box>
      {JSON.stringify(story)}

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
        {/* {story.attributes?.author?.data?.attributes && (
          <Text textStyle={'micro'}>
            {formatAuthor(story.attributes?.author?.data?.attributes)}
          </Text>
        )} */}
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

function formatTimeframe(timeframe: ComponentCoreTimeframe) {
  const timeframes = [timeframe.yearStart, timeframe.yearEnd].filter(item => !!item)
  return timeframes.join(' - ')
}

function formatAuthor(author: Author) {
  return `${capitalizeFirstLetter(author.firstName)}${
    author.insertion ? ' ' + author.insertion : ''
  }${' ' + capitalizeFirstLetter(author.lastName)}`
}

// {
//   "data": {
//       "storiesByLocale": {
//           "data": [
//               {
//                   "id": "3",
//                   "__typename": "StoryEntity",
//                   "attributes": {
//                       "title": "Story with description",
//                       "description": "# Het buurthuis\n\nDe laatste jaren gebeurt er veel op het gebied van buurthuizen. Na beperkende maatregelen als sluiting door bezuinigingen, zijn ze met een enerverende opmars bezig. Als buurthuis met educatieve en recreatieve activiteiten voor de buurt, en als verzamelgebouwen met allerlei functies, zoals een bibliotheek, een leeromgeving, een buurtwinkel, een werkplek, sportgelegenheid en allerlei vormen van ontspanning. Daarmee staan ook de typologie en identiteit van het gebouw, de creatieve ruimte van de ontwerper, het opdrachtgeverschap en het achterliggende verdienmodel weer volop in de belangstelling. Met Pi de Bruijn, Christoph Grafe, David ter Avest en anderen.",
//                       "components": [
//                           {
//                               "id": "4",
//                               "__typename": "ComponentModulesImageCarousel",
//                               "images": {
//                                   "data": [
//                                       {
//                                           "attributes": {
//                                               "url": "/uploads/serey_morm_Z9_G2_Cm3n080_unsplash_dc2e79dd0c.jpg",
//                                               "caption": "serey-morm-Z9G2Cm3n080-unsplash.jpg",
//                                               "width": 7952,
//                                               "height": 5304,
//                                               "size": 7828.35
//                                           }
//                                       }
//                                   ]
//                               },
//                               "description": null,
//                               "imageCarouselModuleLayout": {
//                                   "id": "11",
//                                   "spacingTop": "Md",
//                                   "spacingBottom": "Md"
//                               },
//                               "items": []
//                           },
//                           {
//                               "id": "6",
//                               "__typename": "ComponentModulesImage",
//                               "image": {
//                                   "data": {
//                                       "attributes": {
//                                           "url": "/uploads/serey_morm_Z9_G2_Cm3n080_unsplash_dc2e79dd0c.jpg",
//                                           "height": 5304,
//                                           "width": 7952
//                                       }
//                                   }
//                               },
//                               "story": {
//                                   "data": null
//                               },
//                               "triplyRecord": {
//                                   "data": null
//                               },
//                               "caption": null,
//                               "alt_text": null,
//                               "imageModuleLayout": {
//                                   "id": "12",
//                                   "spacingTop": "Md",
//                                   "spacingBottom": "Md"
//                               }
//                           }
//                       ],
//                       "storyLinks": null,
//                       "triplyRecords": null
//                   }
//               }
//           ]
//       }
//   }
// }
