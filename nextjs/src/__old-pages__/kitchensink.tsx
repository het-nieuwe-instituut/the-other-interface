import { getResponsiveSpacing, grs } from '@/features/shared/styles/utils/spacing'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Grid,
  GridItem,
  Text,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <Container>
      <Text as={'h1'} textStyle={'h2'}>
        kitchensink
      </Text>
      <Box>
        <Text as={'h2'} textStyle={'h2'} size="lg">
          links
        </Text>
        <br></br>
        In 1920 verzocht galeriehouder Léonce Rosenberg de kunstenaars van De Stijl om gezamenlijk
        een ‘centrum van cultuur’ te ontwerpen. Vanwege onderlinge onenigheid werkte Theo van
        Doesburg het idee alleen met Cornelis van Eesteren uit. In plaats van één ontwerp, leverden
        ze er drie aan:{' '}
        <Link href="https://www.google.com">
          Hôtel Particulier, Maison Particulière en Maison d’Artiste
        </Link>
        . Deze ontwerpen werden gepresenteerd tijdens de tentoonstelling in Galerie L’Effort Moderne
        in Parijs in oktober 1923. Daar was ook een ander gezamenlijk project van Van Doesburg en
        Van Eesteren te zien De Universiteitshal.
        <br></br>
        <Text as={'h3'} textStyle={'h3'} size="md">
          variants
        </Text>
        <Link variant={'external'} href="https://www.google.com">
          External link
        </Link>
        <br />
        <Link variant={'decorative'} href="https://www.google.com" data-circle-color="red">
          decorative link
        </Link>
        <br />
        In 1920 verzocht galeriehouder Léonce Rosenberg de kunstenaars van De Stijl om gezamenlijk
        een ‘centrum van cultuur’ te ontwerpen. Vanwege onderlinge onenigheid werkte Theo van
        Doesburg het idee alleen met Cornelis van Eesteren uit. In plaats van één ontwerp, leverden
        ze er drie aan:{' '}
        <Link variant={'decorative'} href="https://www.google.com" data-circle-color="blue">
          decorative link
        </Link>
        . Deze ontwerpen werden gepresenteerd tijdens de tentoonstelling in Galerie L’Effort Moderne
        in Parijs in oktober 1923. Daar was ook een ander gezamenlijk project van Van Doesburg en
        Van Eesteren te zien De Universiteitshal.
      </Box>

      <Box>
        <Text textStyle={'h2'} as={'h2'} size="lg" data-circle-color="red">
          Breadcrumbs
        </Text>
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

      <Box>
        <Text textStyle={'h2'} as={'h2'} size="lg" data-circle-color="red">
          Spacings
        </Text>
        <Box width={'100%'} height={100} bgColor="red" mb={getResponsiveSpacing('sm')}></Box>
        <Box width={'100%'} height={100} bgColor="blue" mb={getResponsiveSpacing('md')}></Box>
        <Box width={'100%'} height={100} bgColor="orange" mb={getResponsiveSpacing('lg')}></Box>
        <Box width={'100%'} height={100} bgColor="purple" mb={grs('xl')}></Box>
        <Box width={'100%'} height={100} bgColor="green"></Box>
      </Box>
      <Box>
        <Text textStyle={'h2'} as={'h2'} size="lg" data-circle-color="red">
          Grid
        </Text>
        <Grid
          // gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={{ sm: 'repeat(4, 1fr)', md: 'repeat(12, 1fr)' }}
          gap="15.5px"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem colSpan={{ sm: 2, md: 6 }} bg="orange.300">
            1
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="pink.300">
            2
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="green.300">
            3
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="blue.300">
            4
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="blue.300">
            5
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="blue.300">
            6
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 3 }} bg="blue.300">
            7
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Text as={'h2'} textStyle={'h2'} size="lg" data-circle-color="red">
          Tables
        </Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default Page
