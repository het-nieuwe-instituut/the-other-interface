import { Box, Text } from '@chakra-ui/react'
import { Markdown } from '../Markdown/Markdown'

interface Props {
    title?: string
    preface?: string
    handleClick?: () => void
    showPointer?: boolean
}

export const PageHeader: React.FC<Props> = ({ title, preface, handleClick, showPointer }) => {
    return (
        <Box onClick={handleClick ? handleClick : undefined} cursor={showPointer ? 'pointer' : 'cursor'} pl={'24px'}>
            <Text as={'h1'} textStyle={'h1'} pb={'md'}>
                {title}
            </Text>
            {preface && <Markdown>{preface}</Markdown>}
        </Box>
    )
}
