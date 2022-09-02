import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Heading, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
    return (
        <Container>
            <Heading as={'h1'}>kitchensink</Heading>
            <Box>
                <Heading as={'h2'} size="lg">
                    links
                </Heading>
                <br></br>
                In 1920 verzocht galeriehouder Léonce Rosenberg de kunstenaars van De Stijl om gezamenlijk een ‘centrum
                van cultuur’ te ontwerpen. Vanwege onderlinge onenigheid werkte Theo van Doesburg het idee alleen met
                Cornelis van Eesteren uit. In plaats van één ontwerp, leverden ze er drie aan:{' '}
                <Link href="https://www.google.com">Hôtel Particulier, Maison Particulière en Maison d’Artiste</Link>.
                Deze ontwerpen werden gepresenteerd tijdens de tentoonstelling in Galerie L’Effort Moderne in Parijs in
                oktober 1923. Daar was ook een ander gezamenlijk project van Van Doesburg en Van Eesteren te zien De
                Universiteitshal.
                <br></br>
                <Heading as={'h3'} size="md">
                    variants
                </Heading>
                <Link variant={'external'} href="https://www.google.com">
                    External link
                </Link>
                <br />
                <Link variant={'decorative'} href="https://www.google.com" data-circle-color="red">
                    decorative link
                </Link>
                <br />
                In 1920 verzocht galeriehouder Léonce Rosenberg de kunstenaars van De Stijl om gezamenlijk een ‘centrum
                van cultuur’ te ontwerpen. Vanwege onderlinge onenigheid werkte Theo van Doesburg het idee alleen met
                Cornelis van Eesteren uit. In plaats van één ontwerp, leverden ze er drie aan:{' '}
                <Link variant={'decorative'} href="https://www.google.com" data-circle-color="blue">
                    decorative link
                </Link>
                . Deze ontwerpen werden gepresenteerd tijdens de tentoonstelling in Galerie L’Effort Moderne in Parijs
                in oktober 1923. Daar was ook een ander gezamenlijk project van Van Doesburg en Van Eesteren te zien De
                Universiteitshal.
            </Box>

            <Box>
                <Heading as={'h2'} size="lg" data-circle-color="red">
                    Breadcrumbs
                </Heading>
                <Breadcrumb separator="-">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" as={Link}>
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" as={Link}>
                            About
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" as={Link}>
                            Contact
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <></>
        </Container>
    )
}

export default Page
