import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link, Text } from '@chakra-ui/react'
import { Markdown } from '../Markdown/Markdown'

interface Props {
    title?: string
    preface?: string
}

export const PageHeader: React.FC<Props> = ({ title, preface }) => {
    return (
        <>
            <Breadcrumb separator="/">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" as={Link}>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" as={Link}></BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Text as={'h1'} textStyle={'h1'} pb={'md'}>
                {title}
            </Text>
            {preface && <Markdown>{preface}</Markdown>}
        </>
    )
}
