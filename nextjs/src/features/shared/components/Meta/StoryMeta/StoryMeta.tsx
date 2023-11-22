'use client'
import { Box, Link, Text } from '@chakra-ui/react'
import { EnumComponentmodulesbuttonsmoduleButtonstyle } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
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

          <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={'2px'}>
            {linkedPeopleRecords.map((person, index, array) => {
              const hasItemAfter = array.length - 1 !== index

              if (!person.recordId || !person.title) return null

              return (
                <Text textStyle={'socialLarge.lg'} key={person.recordId} mr={1} mb={1}>
                  <Link
                    href={getPeoplePathForTriplyRecordId(person.recordId)}
                    borderBottom={'1px solid'}
                    borderColor={'blackAlpha.100'}
                  >
                    {person.title}
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
          <Text textStyle={'socialLarge.lg'} fontWeight={700} mb={2}>
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
