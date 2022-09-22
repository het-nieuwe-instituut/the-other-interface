import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Link } from '@chakra-ui/react'
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
            <Heading as={'h1'} textStyle={'h1'}>
                {title}
            </Heading>
            {preface && <Markdown>{preface}</Markdown>}
        </>
    )
}
