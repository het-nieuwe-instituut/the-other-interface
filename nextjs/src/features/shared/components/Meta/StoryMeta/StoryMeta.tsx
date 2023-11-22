'use client'
// import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
// import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'
// import { getPeoplePathForTriplyRecordId } from '@/features/shared/utils/links'
// import { keyExtractor } from '@/features/shared/utils/lists'
// import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import { Box, Link, Text } from '@chakra-ui/react'
// import NextLink from 'next/link'
import {
  // Author,
  // ComponentCoreTimeframe,
  EnumComponentcorepublicationdateDisplaytype,
  EnumComponentmodulesbuttonsmoduleButtonstyle,
  // EnumComponentmodulesbuttonsmoduleButtonstyle,
  // EnumTriplyrecordType,
} from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
import { keyExtractor } from '@/features/shared/utils/lists'
import { getPeoplePathForTriplyRecordId } from '@/features/shared/utils/links'
import { ButtonsGrid } from '../../ButtonsGrid/ButtonsGrid'

export const StoryMeta: React.FC = () => {
  const {
    commonT,
    storiesT,
    story,
    isLoading,
    publicationDateFormatted,
    authorFormatted,
    themes,
    linkedPeopleRecords,
    locations,
    timeframe,
    links,
  } = usePresenter()

  if (isLoading) {
    return <Loader />
  }

  if (!story) return null

  return (
    <Box>
      <Box marginBottom={'md'}>
        <Text textStyle={'socialLarge.lg'} fontWeight={700} marginBottom={1}>
          {commonT.t('published', {
            date: publicationDateFormatted,
          })}
        </Text>
        {authorFormatted && (
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {authorFormatted}
          </Text>
        )}
      </Box>
      {story.shortDescription && (
        <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
          {story.shortDescription}
        </Text>
      )}
      {themes && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700} marginBottom={1}>
            {storiesT.t('themes')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {themes}
          </Text>
        </Box>
      )}
      {!!linkedPeopleRecords.length && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700} mb={1}>
            {storiesT.t('people')}
          </Text>

          <Box display={'flex'} flexDirection={'row'}>
            {linkedPeopleRecords.map((person, index, array) => {
              const hasItemAfter = array.length - 1 !== index
              return (
                <Text textStyle={'socialLarge.lg'} key={person.recordId} mr={1}>
                  <Link href={getPeoplePathForTriplyRecordId(person.recordId)}>
                    {person.recordId}
                    {hasItemAfter && ','}
                  </Link>
                </Text>
              )
            })}
          </Box>
        </Box>
      )}
      {locations && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700} marginBottom={1}>
            {storiesT.t('locations')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {locations}
          </Text>
        </Box>
      )}
      {timeframe && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700} marginBottom={1}>
            {storiesT.t('time')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {timeframe}
          </Text>
        </Box>
      )}

      {!!links?.length && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700} mb={1}>
            {storiesT.t('share')}
          </Text>

          <ButtonsGrid
            buttonLayoutStyle={{
              whiteSpace: 'normal',
              wordWrap: 'break-word',
            }}
            flexDirection="column"
            buttons={links}
            buttonStyle={EnumComponentmodulesbuttonsmoduleButtonstyle.Default}
          />
        </Box>
      )}
    </Box>
  )
}
