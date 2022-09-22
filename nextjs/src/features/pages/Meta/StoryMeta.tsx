import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'
import { keyExtractor } from '@/features/shared/utils/lists'
import { Box, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import {
    Author,
    ComponentCoreTimeframe,
    EnumComponentcorepublicationdateDisplaytype,
    StoryBySlugQuery,
} from 'src/generated/graphql'

type Story = NonNullable<NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0]>
interface Props {
    story: Story
}

export const StoryMeta: React.FC<Props> = ({ story }) => {
    const commonT = useTypeSafeTranslation('common')
    const storiesT = useTypeSafeTranslation('stories')

    return (
        <Box>
            <Box mb={6}>
                <Text textStyle={'micro'} margin={'sm'}>
                    {commonT.t('published', {
                        date: story.attributes?.publicationDate
                            ? formatPublicationDate(
                                  story.attributes?.publicationDate.displayType,
                                  story.attributes?.publicationDate.date
                              )
                            : formatPublicationDate(
                                  EnumComponentcorepublicationdateDisplaytype.Year,
                                  story.attributes?.publishedAt
                              ),
                    })}
                </Text>
                {story.attributes?.author?.data?.attributes && (
                    <Text textStyle={'micro'}>{formatAuthor(story.attributes?.author?.data?.attributes)}</Text>
                )}
            </Box>

            {!!story.attributes?.timeframe && (
                <Box mb={6}>
                    <Text textStyle={'h4'} mb={1}>
                        {storiesT.t('time').toUpperCase()}
                    </Text>
                    <Text textStyle={'micro'}>
                        <NextLink href={'/timeframes'} passHref>
                            <Link>{formatTimeframe(story.attributes?.timeframe)}</Link>
                        </NextLink>
                    </Text>
                </Box>
            )}

            {!!story.attributes?.locations?.data.length && (
                <Box mb={6}>
                    <Text textStyle={'h4'} mb={1}>
                        {storiesT.t('locations').toUpperCase()}
                    </Text>

                    <Box display={'flex'} flexDirection={'row'}>
                        {story.attributes?.locations?.data.map((item, index, array) => {
                            const hasItemAfter = array.length - 1 !== index
                            return (
                                <Text textStyle={'micro'} key={keyExtractor(item, index, array)} mr={1}>
                                    <NextLink href={`/locations/${item.attributes?.city}}`} passHref>
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
            )}
        </Box>
    )
}

function formatPublicationDate(type?: EnumComponentcorepublicationdateDisplaytype | null, date?: string | null) {
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
    return `${author?.firstName}${' ' + author?.insertion}${' ' + author?.lastName}`
}
