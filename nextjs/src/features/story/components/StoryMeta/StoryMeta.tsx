'use client'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { getUniqueById } from '@/features/shared/utils/get-unique-by-id'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useParams } from 'next/navigation'
import { EnumTriplyrecordType, TriplyRecord } from 'src/generated/graphql'
import { formatAuthor, formatPublicationDate, formatTimeframe, getPeopleUrl } from './helpers'
import NextLink from 'next/link'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { keyExtractor } from '@/features/shared/utils/lists'

export const StoryMeta: React.FC = () => {
  const storiesT = useTypeSafeTranslation('stories')
  const lang = useLocale()

  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryMetaByIdQuery({
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })
  const story = data?.storyMetaByLocale?.data?.attributes

  const publicationDateFormatted = formatPublicationDate(
    lang,
    story?.publicationDate?.displayType,
    story?.publicationDate?.date
  )
  const authorFormatted = story?.author
    ? {
        name: formatAuthor(story?.author?.data?.attributes),
        id: story.author.data?.id,
      }
    : ''
  const themes = story?.themes?.data?.map(theme => ({ name: theme.attributes?.name, id: theme.id }))
  const locations = story?.locations?.data?.map(location => ({
    name: location.attributes?.city,
    id: location.id,
  }))
  const timeframe = formatTimeframe(story?.timeframe)
  const parentRelation = story?.parent_story
  const childrenRelation = story?.child_stories

  const linkedPeopleRecords = getUniqueById(
    story?.triplyRecords?.data
      .filter((record): record is { attributes: TriplyRecord } => Boolean(record.attributes))
      .filter(record => record.attributes?.type === EnumTriplyrecordType.People)
      .map(record => ({
        id: record.attributes.recordId,
        title: record.attributes.people?.title,
        url: getPeopleUrl(record.attributes.recordId, lang),
      })) || []
  )

  if (isLoading) {
    return <ThemedSpinner />
  }

  if (!story) return null

  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full ">
        {publicationDateFormatted && (
          <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>
            {publicationDateFormatted}
          </p>
        )}

        {authorFormatted && (
          <NextLink
            href={addLocaleToUrl(
              `/landingpage?category=stories&filters=${encodeFilters([
                {
                  field: 'author',
                  value: authorFormatted.name || '',
                  id: authorFormatted.id || '',
                },
              ])}&searchResult=true`,
              lang
            )}
          >
            <p className={TypographyVariants({ social: 'smLink', className: 'font-bold' })}>
              {storiesT.t('by', {
                author: authorFormatted.name,
              })}
            </p>
          </NextLink>
        )}
        {story.shortDescription && (
          <p className={TypographyVariants({ social: 'sm' })}>{story.shortDescription}</p>
        )}
      </div>
      {parentRelation && parentRelation?.data?.id && (
        <MetaField name={storiesT.t('parentStory')}>
          <NavLinkButton
            title={parentRelation?.data?.attributes?.title ?? ''}
            variant={'metaData'}
            href={`/detail/${CATEGORIES.stories}/${parentRelation?.data?.id}?lang=${lang}`}
          >
            {parentRelation?.data?.attributes?.title}
          </NavLinkButton>
        </MetaField>
      )}
      {childrenRelation && childrenRelation?.data && childrenRelation.data.length > 0 && (
        <MetaField name={storiesT.t('subStories')}>
          <div>
            {childrenRelation?.data?.map(child => {
              return (
                <NavLinkButton
                  title={child.attributes?.title}
                  key={child.id}
                  variant={'metaData'}
                  href={`/detail/${CATEGORIES.stories}/${child.id}?lang=${lang}`}
                >
                  {child.attributes?.title}
                </NavLinkButton>
              )
            })}
          </div>
        </MetaField>
      )}
      {/* We decided to remove this for now, but still there is a possiblity that after test we will add it back, so we will keep it here for now. */}
      {/* {siblingsRelation && siblingsRelation.length > 0 && (
        <Box marginBottom={'sm'}>
          <p className={TypographyVariants({ social: 'sm' })}>
            {storiesT.t('siblingsStories')}
          </p>
          {siblingsRelation?.map((sibling, index, array) => {
            const hasItemAfter = array.length - 1 !== index

            return (
              <p className={TypographyVariants({ social: 'md' })} key={sibling.id} mr={1} mt={1} mb={2}>
                <Link
                  href={`/detail/${CATEGORIES.stories}/${sibling.id}?lang=${lang}`}
                  borderBottom={'1px solid'}
                  borderColor={'blackAlpha.100'}
                >
                  {sibling?.attributes?.title}
                  {hasItemAfter && ','}
                </Link>
              </p>
            )
          })}
        </Box>
      )} */}
      {themes && (
        // <MetaField name={storiesT.t('themes')}>
        //   <p className={TypographyVariants({ social: 'sm' })}>{themes}</p>
        // </MetaField>

        <MetaField name={storiesT.t('themes')}>
          <div>
            {themes.map((theme, index, array) => {
              // const hasItemAfter = array.length - 1 !== index
              return (
                <NextLink
                  key={keyExtractor(theme, index, array)}
                  href={addLocaleToUrl(
                    `/landingpage?category=stories&filters=${encodeFilters([
                      {
                        field: 'theme',
                        value: theme.name ?? '',
                        id: theme.id ?? '',
                      },
                    ])}&searchResult=true`,
                    lang
                  )}
                >
                  <p className={TypographyVariants({ social: 'smLink' })}>{theme.name}</p>
                </NextLink>
              )
            })}
          </div>
        </MetaField>
      )}
      {!!linkedPeopleRecords.length && (
        <MetaField name={storiesT.t('people')}>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
            {linkedPeopleRecords.map(person => {
              return (
                <NavLinkButton
                  title={person.title ?? ''}
                  key={person.id}
                  variant={'metaData'}
                  href={person.url}
                >
                  {person.title}
                </NavLinkButton>
              )
            })}
          </div>
        </MetaField>
      )}
      {locations && (
        <MetaField name={storiesT.t('locations')}>
          <div>
            {locations.map((location, index, array) => {
              // const hasItemAfter = array.length - 1 !== index
              return (
                <NextLink
                  key={keyExtractor(location, index, array)}
                  href={addLocaleToUrl(
                    `/landingpage?category=stories&filters=${encodeFilters([
                      {
                        field: 'location',
                        value: location.name ?? '',
                        id: location.id ?? '',
                      },
                    ])}&searchResult=true`,
                    lang
                  )}
                >
                  <p className={TypographyVariants({ social: 'smLink' })}>{location.name}</p>
                </NextLink>
              )
            })}
          </div>
        </MetaField>
      )}
      {timeframe && (
        <MetaField name={storiesT.t('time')}>
          <p className={TypographyVariants({ social: 'sm' })}>{timeframe}</p>
        </MetaField>
      )}

      {/* Should be hidden for now */}
      {/* {!!links?.length && (
        <Box marginBottom={'sm'}>
          <p className={TypographyVariants({ social: 'sm' })} mb={2}>
            {storiesT.t('share')}
          </p>

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

const MetaField = ({ name, children }: { name?: string; children: JSX.Element }) => {
  return (
    <div className="relative flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
      <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>{name}</p>
      {children}
    </div>
  )
}
