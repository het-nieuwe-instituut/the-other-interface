import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'
import { Box, Link, Text } from '@chakra-ui/react'
import { Author, ComponentCoreTimeframe, StoryBySlugQuery } from 'src/generated/graphql'
import NextLink from 'next/link'

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
                <Text textStyle={'micro'}>
                    {commonT.t('published', { date: formatDate(story.attributes?.publishedAt, 'YYYY') })}
                </Text>
                {story.attributes?.author?.data?.attributes && (
                    <Text textStyle={'micro'}>{formatAuthor(story.attributes?.author?.data?.attributes)}</Text>
                )}
            </Box>

            {story.attributes?.timeframe && (
                <Box mb={6}>
                    <Text textStyle={'h4'} mb={1}>
                        {storiesT.t('time')}
                    </Text>
                    <Text textStyle={'micro'}>
                        <NextLink href={'/timeframes'} passHref>
                            <Link>{formatTimeframe(story.attributes?.timeframe)}</Link>
                        </NextLink>
                    </Text>
                </Box>
            )}
        </Box>
    )
}

function formatTimeframe(timeframe: ComponentCoreTimeframe) {
    const timeframes = [timeframe.yearStart, timeframe.yearEnd].filter(item => !!item)
    return timeframes.join(' - ')
}

function formatAuthor(author: Author) {
    return `${author?.firstName}${' ' + author?.insertion}${' ' + author?.lastName}`
}
