import { chunk, keyExtractor } from '@/features/shared/utils/lists'
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpoint,
  Text,
} from '@chakra-ui/react'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component?: TableModuleType
  LoadMore?: React.ReactNode
  count?: string
}

interface TableModuleType {
  name?: string | null
  description?: string | null
  tableBody?: TableBody[] | null
  tableHead?: TableHeadItem[] | null
}

interface TableBody {
  TableBodyItem?: { id: string; value?: string }[] | null
}

interface TableHeadItem {
  id: string
  label?: string
}

export const TableModule: React.FC<Props> = props => {
  const { component, LoadMore, count } = props
  const breakpoint = useBreakpoint()

  if (!component) {
    return null
  }

  if (breakpoint === 'sm' || breakpoint === 'base') {
    return (
      <Box
        backgroundColor={'inherit'}
        pt={modulesSpacingMapper?.TableModule.spacingTop}
        pb={modulesSpacingMapper?.TableModule.spacingBottom}
      >
        <Text textStyle={'h2'} as="h2" pb={'md'}>
          {component.name} {count ? `(${count})` : ''}
        </Text>
        {component.description && <Text pb={'md'}>{component.description}</Text>}
        <TableModuleMobile component={component} />
      </Box>
    )
  }

  return (
    <Box
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.TableModule.spacingTop}
      pb={modulesSpacingMapper?.TableModule.spacingBottom}
    >
      <Text as={'h2'} textStyle={'impactNew.xl'} pb={'sm'}>
        {component.name} {count ? `(${count})` : ''}
      </Text>
      {component.description && (
        <Text pb={'md'} textStyle={'socialLarge.lg'}>
          {component.description}
        </Text>
      )}
      <TableModuleDesktop component={component} LoadMore={LoadMore} />
    </Box>
  )
}

export const TableModuleMobile: React.FC<Props> = props => {
  const body = props?.component?.tableBody

  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          {body?.map((item, index) => {
            const chunkedItems = chunk(item?.TableBodyItem ?? [], 2)

            return (
              <Tr key={index}>
                {chunkedItems.map((bodyItem, index, array) => {
                  return (
                    <Td key={keyExtractor(bodyItem[0], index, array)} verticalAlign={'top'}>
                      {bodyItem[0] && (
                        <Text margin={0} fontSize={'16px'} mb={1}>
                          {bodyItem[0]?.value}
                        </Text>
                      )}

                      {bodyItem[1] && (
                        <Text margin={0} fontSize={'16px'} mt={0}>
                          {bodyItem[1]?.value}
                        </Text>
                      )}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export const TableModuleDesktop: React.FC<Props> = props => {
  const head = props?.component?.tableHead
  const body = props?.component?.tableBody
  const LoadMore = props.LoadMore

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {head?.map((item, index, array) => (
              <Th
                key={keyExtractor(item, index, array)}
                textTransform={'initial'}
                // Overriding styles with textStyle does not work on this component
                color={'black'}
                fontSize={'16px'}
                lineHeight={'130%'}
                fontFamily={'Social'}
                letterSpacing={'0.32px'}
              >
                {item?.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {body?.map((item, index) => (
            <Tr key={index}>
              {item?.TableBodyItem?.map((bodyItem, index, array) => (
                <Td
                  key={keyExtractor(bodyItem, index, array)}
                  // Overriding styles with textStyle does not work on this component
                  fontSize={index === 0 ? '32px' : '21px'}
                  fontWeight={index === 0 ? '700' : '400'}
                  lineHeight={index === 0 ? '110%' : '130%'}
                  letterSpacing={index === 0 ? '-0.32px' : '0.21px'}
                  maxW={'250px'}
                  whiteSpace={'normal'}
                >
                  {bodyItem?.value}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {LoadMore && <>{LoadMore}</>}
    </TableContainer>
  )
}
