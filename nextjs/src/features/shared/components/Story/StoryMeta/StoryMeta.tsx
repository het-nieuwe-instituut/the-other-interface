'use client'
import { Box, Link, Text } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'

export const StoryMeta: React.FC = () => {
  const {
    storiesT,
    story,
    isLoading,
    publicationDateFormatted,
    authorFormatted,
    themes,
    linkedPeopleRecords,
    locations,
    timeframe,
  } = usePresenter()

  if (isLoading) {
    return <Loader />
  }

  if (!story) return null

  return (
    <Box>
      <Box marginBottom={'md'}>
        {publicationDateFormatted && (
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('published', {
              date: publicationDateFormatted,
            })}
          </Text>
        )}

        {authorFormatted && (
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('by', {
              author: authorFormatted,
            })}
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
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
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

              return (
                <Text textStyle={'socialLarge.lg'} key={person.id} mr={1} mb={1}>
                  <Link href={person.url} borderBottom={'1px solid'} borderColor={'blackAlpha.100'}>
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
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('locations')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {locations}
          </Text>
        </Box>
      )}
      {timeframe && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('time')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {timeframe}
          </Text>
        </Box>
      )}

      {/* Should be hidden for now */}
      {/* {!!links?.length && (
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
      )} */}
    </Box>
  )
}
