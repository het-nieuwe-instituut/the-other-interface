'use client'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { getUniqueById } from '@/features/shared/utils/get-unique-by-id'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useParams } from 'next/navigation'
import { EnumTriplyrecordType, TriplyRecord } from 'src/generated/graphql'

import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { keyExtractor } from '@/features/shared/utils/lists'
import { MetaSkeleton } from '@/features/ui/components/Skeletons/MetaSkeleton'
import NextLink from 'next/link'
import { formatAuthor, formatPublicationDate, formatTimeframe, getPeopleUrl } from './helpers'

export const StoryMeta: React.FC = () => {
  const storiesT = useTypeSafeTranslation('stories')
  const lang = useLocale()

  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryMetaByIdQuery({
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })

  if (isLoading) {
    return <MetaSkeleton />
  }

  if (!data?.storyByLocale.data) return null

  const { publicationDate, themes, locations, timeframe, authors } = data.storyByLocale.data
  const { parent_story, child_stories, triplyRecords } = data.storyByLocale.data
  const { shortDescription } = data.storyByLocale.data.attributes || {}

  const publicationDateFormatted = formatPublicationDate(
    lang,
    publicationDate?.displayType,
    publicationDate?.date
  )

  const authorsFormatted = authors?.data.map(author => {
    const name = formatAuthor(author.attributes)
    return {
      id: author.id,
      name,
      href: addLocaleToUrl(
        `/landingpage?category=stories&filters=${encodeFilters([
          {
            key: 'author',
            value: name || '',
            id: author.id || '',
          },
        ])}&searchResult=true`,
        lang
      ),
    }
  })

  const formattedTimeframe = formatTimeframe(timeframe)

  const linkedPeopleRecords = getUniqueById(
    triplyRecords
      ?.filter((record): record is { attributes: TriplyRecord } => Boolean(record.attributes))
      .filter(record => record.attributes?.type === EnumTriplyrecordType.People)
      .map(record => ({
        id: record.attributes.recordId,
        title: record.attributes.people?.title,
        url: getPeopleUrl(record.attributes.recordId, lang),
      })) || []
  )

  return (
    <div className="flex flex-row flex-wrap">
      {dateAndAuthor()}
      <div className="flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
        {shortDescription && (
          <p className={TypographyVariants({ socialLarge: 'md' })}>{shortDescription}</p>
        )}
      </div>
      {parent_story && parent_story?.data?.id && (
        <MetaField name={storiesT.t('parentStory')}>
          <NavLinkButton
            title={parent_story?.data?.attributes?.title ?? ''}
            variant={'metaData'}
            href={`/detail/${CATEGORIES.stories}/${parent_story?.data?.id}?lang=${lang}`}
          >
            {parent_story?.data?.attributes?.title}
          </NavLinkButton>
        </MetaField>
      )}
      {child_stories && child_stories.length > 0 && (
        <MetaField name={storiesT.t('subStories')}>
          <div>
            {child_stories.map(child => {
              return (
                <NavLinkButton
                  title={child.attributes?.title}
                  key={child.id}
                  variant={'metaData'}
                  href={`/detail/${CATEGORIES.stories}/${child.id}?lang=${lang}`}
                  className="mb-0 [&:not(:last-child)]:mb-1"
                >
                  {child.attributes?.title}
                </NavLinkButton>
              )
            })}
          </div>
        </MetaField>
      )}
      {themes && (
        <MetaField name={storiesT.t('themes')}>
          <div className="pt-2">
            {themes.map((theme, index, array) => {
              return (
                // margin is needed for lighthouse score reasons
                <div className="mb-2 last:mb-0" key={keyExtractor(theme, index, array)}>
                  <NextLink
                    href={addLocaleToUrl(
                      `/landingpage?category=stories&filters=${encodeFilters([
                        {
                          key: 'theme',
                          value: theme.attributes?.name ?? '',
                          id: theme.id ?? '',
                        },
                      ])}&searchResult=true`,
                      lang
                    )}
                    className="hover:opacity-50"
                  >
                    <p
                      className={TypographyVariants({
                        socialLarge: 'md',
                        className: 'underline',
                      })}
                    >
                      {theme.attributes?.name}
                    </p>
                  </NextLink>
                </div>
              )
            })}
          </div>
        </MetaField>
      )}
      {!!linkedPeopleRecords.length && (
        <MetaField name={storiesT.t('people')}>
          <div className="pt-2">
            {linkedPeopleRecords.map(person => {
              return (
                // margin is needed for lighthouse score reasons
                <div className="mb-2 last:mb-0" key={person.id}>
                  <NextLink href={person.url} className="hover:opacity-50">
                    <p
                      className={TypographyVariants({
                        socialLarge: 'md',
                        className: 'underline',
                      })}
                    >
                      {person.title}
                    </p>
                  </NextLink>
                </div>
              )
            })}
          </div>
        </MetaField>
      )}
      {locations && (
        <MetaField name={storiesT.t('locations')}>
          <div className="pt-2">
            {locations.map((location, index, array) => {
              return (
                <NextLink
                  key={keyExtractor(location, index, array)}
                  href={addLocaleToUrl(
                    `/landingpage?category=stories&filters=${encodeFilters([
                      {
                        key: 'location',
                        value: location.attributes?.city ?? '',
                        id: location.id ?? '',
                      },
                    ])}&searchResult=true`,
                    lang
                  )}
                  className="hover:opacity-50"
                >
                  <p
                    className={TypographyVariants({
                      socialLarge: 'md',
                      className: 'underline',
                    })}
                  >
                    {location.attributes?.city}
                  </p>
                </NextLink>
              )
            })}
          </div>
        </MetaField>
      )}
      {formattedTimeframe && (
        <MetaField name={storiesT.t('time')}>
          <p className={TypographyVariants({ socialLarge: 'md' })}>{formattedTimeframe}</p>
        </MetaField>
      )}
    </div>
  )

  function dateAndAuthor() {
    if (publicationDateFormatted && authorsFormatted && authorsFormatted.length > 0) {
      return (
        <div className="flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
          <p className={TypographyVariants({ socialLarge: 'md', className: 'font-bold' })}>
            {storiesT.t('published', { date: publicationDateFormatted })}
          </p>
          <span className="flex">
            <p
              className={TypographyVariants({
                socialLarge: 'md',
                className: 'font-bold',
              })}
            >
              {storiesT.t('by')}
            </p>
            <div className="flex flex-row flex-wrap">
              {authorsFormatted.map(author => {
                return (
                  <NextLink key={author.id} href={author.href} className="hover:opacity-50">
                    <p
                      className={TypographyVariants({
                        socialLarge: 'md',
                        className: 'font-bold underline pl-1',
                      })}
                    >
                      {author.name}
                    </p>
                  </NextLink>
                )
              })}
            </div>
          </span>
        </div>
      )
    }
    if (!publicationDateFormatted && authorsFormatted && authorsFormatted.length > 0) {
      return (
        <div className="flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
          <span className="flex">
            <p
              className={TypographyVariants({
                socialLarge: 'md',
                className: 'font-bold',
              })}
            >
              {storiesT.t('storyBy')}
            </p>
            <div className="flex flex-row flex-wrap">
              {authorsFormatted.map(author => {
                return (
                  <NextLink key={author.id} href={author.href} className="hover:opacity-50">
                    <p
                      className={TypographyVariants({
                        socialLarge: 'md',
                        className: 'font-bold underline pl-1',
                      })}
                    >
                      {author.name}
                    </p>
                  </NextLink>
                )
              })}
            </div>
          </span>
        </div>
      )
    }
    if (authorsFormatted?.length === 0 && publicationDateFormatted) {
      return (
        <div className="flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
          <p className={TypographyVariants({ socialLarge: 'md', className: 'font-bold' })}>
            {storiesT.t('published', { date: publicationDateFormatted })}
          </p>
        </div>
      )
    }
    return null
  }
}

const MetaField = ({ name, children }: { name?: string; children: JSX.Element }) => {
  return (
    <div className="relative flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
      <p className={TypographyVariants({ socialLarge: 'md', className: 'font-bold' })}>{name}</p>
      {children}
    </div>
  )
}
