import { Box, Text } from '@chakra-ui/react'
import { Markdown } from '../Markdown/Markdown'

interface Props {
    title?: string
    preface?: string
}

// Breadcrumbs need to be moved to the very top of the page
// Removed for now
export const PageHeader: React.FC<Props> = ({ title, preface }) => {
    return (
        <Box>
            {/* <Breadcrumb separator="/">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" as={Link}>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" as={Link}></BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb> */}
            <Text as={'h1'} textStyle={'h1'} pb={'md'}>
                {title}
            </Text>
            {preface && <Markdown>{preface}</Markdown>}
        </Box>
    )
}
