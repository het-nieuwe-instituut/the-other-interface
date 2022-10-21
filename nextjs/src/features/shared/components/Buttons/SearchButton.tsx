import { Button, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'

interface SearchButtonProps {}

export const SearchButton: React.FC<SearchButtonProps> = ({}) => {
    return (
        <NextLink style={{ width: '100%' }} href={'www.url.nl'}>
            <Button as={'a'} target={'www.url.nl'}>
                <Text as={'span'}> {capitalizeFirstLetter('Search')}</Text>
            </Button>
        </NextLink>
    )
}
