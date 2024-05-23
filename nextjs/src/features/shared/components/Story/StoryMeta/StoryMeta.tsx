'use client'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { Link, Text } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'

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
    childrenRelation,
    parentRelation,
    lang,
  } = usePresenter()

  if (isLoading) {
    return <ThemedSpinner />
  }

  if (!story) return null

  return (
    <div>
      <div className="mb-5">
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
      </div>
      {story.shortDescription && (
        <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
          {story.shortDescription}
        </Text>
      )}
      {parentRelation && parentRelation?.data?.id && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('parentStory')}
          </Text>
          <Text textStyle={'socialLarge.lg'} mt={1}>
            <Link
              href={`/detail/${CATEGORIES.stories}/${parentRelation?.data?.id}?lang=${lang}`}
              borderBottom={'1px solid'}
              borderColor={'blackAlpha.100'}
            >
              {parentRelation?.data?.attributes?.title}
            </Link>
          </Text>
        </div>
      )}
      {childrenRelation && childrenRelation?.data && childrenRelation.data.length > 0 && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('subStories')}
          </Text>
          {childrenRelation?.data?.map((child, index, array) => {
            const hasItemAfter = array.length - 1 !== index

            return (
              <Text textStyle={'socialLarge.lg'} key={child.id} mr={1} mt={1} mb={2}>
                <Link
                  href={`/detail/${CATEGORIES.stories}/${child.id}?lang=${lang}`}
                  borderBottom={'1px solid'}
                  borderColor={'blackAlpha.100'}
                >
                  {child?.attributes?.title}
                  {hasItemAfter && ','}
                </Link>
              </Text>
            )
          })}
        </div>
      )}
      {/* We decided to remove this for now, but still there is a possiblity that after test we will add it back, so we will keep it here for now. */}
      {/* {siblingsRelation && siblingsRelation.length > 0 && (
        <Box marginBottom={'md'}>
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('siblingsStories')}
          </Text>
          {siblingsRelation?.map((sibling, index, array) => {
            const hasItemAfter = array.length - 1 !== index

            return (
              <Text textStyle={'socialLarge.lg'} key={sibling.id} mr={1} mt={1} mb={2}>
                <Link
                  href={`/detail/${CATEGORIES.stories}/${sibling.id}?lang=${lang}`}
                  borderBottom={'1px solid'}
                  borderColor={'blackAlpha.100'}
                >
                  {sibling?.attributes?.title}
                  {hasItemAfter && ','}
                </Link>
              </Text>
            )
          })}
        </Box>
      )} */}
      {themes && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('themes')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {themes}
          </Text>
        </div>
      )}
      {!!linkedPeopleRecords.length && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700} mb={1}>
            {storiesT.t('people')}
          </Text>

          <div className="flex flex-row flex-wrap gap-[2px]">
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
          </div>
        </div>
      )}
      {locations && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('locations')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {locations}
          </Text>
        </div>
      )}
      {timeframe && (
        <div className="mb-5">
          <Text textStyle={'socialLarge.lg'} fontWeight={700}>
            {storiesT.t('time')}
          </Text>
          <Text textStyle={'socialLarge.lg'} marginBottom={'md'}>
            {timeframe}
          </Text>
        </div>
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
    </div>
  )
}
