import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'
import { Box, Text } from '@chakra-ui/react'
import { Author, StoryBySlugQuery } from 'src/generated/graphql'

type Story = NonNullable<NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0]>
interface Props {
    story: Story
}

export const StoryMeta: React.FC<Props> = ({ story }) => {
    const { t } = useTypeSafeTranslation('common')
    return (
        <Box>
            <Text textStyle={'micro'}>
                {t('published', { date: formatDate(story.attributes?.publishedAt, 'YYYY') })}
            </Text>
            {story.attributes?.author?.data?.attributes && (
                <Text textStyle={'micro'}>{formatAuthor(story.attributes?.author?.data?.attributes)}</Text>
            )}
        </Box>
    )
}

function formatAuthor(author: Author) {
    return `${author?.firstName}${' ' + author?.insertion}${' ' + author?.lastName}`
}
