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

import { ComponentModulesTableModule } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component: ComponentModulesTableModule
}

export const TableModule: React.FC<Props> = props => {
  const table = props.component
  const breakpoint = useBreakpoint()

  if (!table) {
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
          {props.component.table?.data?.attributes?.name}
        </Text>
        {props.component.table?.data?.attributes?.description && (
          <Text pb={'md'}>{props.component.table?.data?.attributes?.description}</Text>
        )}
        <TableModuleMobile component={props.component} />
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
        {props.component.table?.data?.attributes?.name}{' '}
        {`(${props.component.table?.data?.attributes?.TableBody?.length})`}
      </Text>
      {props.component.table?.data?.attributes?.description && (
        <Text pb={'md'} textStyle={'socialLarge.lg'}>
          {props.component.table?.data?.attributes?.description}
        </Text>
      )}
      <TableModuleDesktop component={props.component} />
    </Box>
  )
}

export const TableModuleMobile: React.FC<Props> = props => {
  const body = props.component.table?.data?.attributes?.TableBody

  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          {body?.map((item, index, array) => {
            const chunkedItems = chunk(item?.TableBodyItem ?? [], 2)
            return (
              <Tr key={keyExtractor(item, index, array)}>
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
  const head = props.component.table?.data?.attributes?.Tablehead
  const body = props.component.table?.data?.attributes?.TableBody

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {head?.TableHeadItem?.map((item, index, array) => (
              <Th
                key={keyExtractor(item, index, array)}
                textTransform={'capitalize'}
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
          {body?.map((item, index, array) => (
            <Tr key={keyExtractor(item, index, array)}>
              {item?.TableBodyItem?.map((bodyItem, index, array) => (
                <Td
                  key={keyExtractor(bodyItem, index, array)}
                  // Overriding styles with textStyle does not work on this component
                  fontSize={index === 0 ? '32px' : '21px'}
                  fontWeight={index === 0 ? '700' : '400'}
                  lineHeight={index === 0 ? '110%' : '130%'}
                  letterSpacing={index === 0 ? '-0.32px' : '0.21px'}
                >
                  {bodyItem?.value}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* Pagination not yet implemented - Load more button for when it is */}
      {/* <Text
        as={'button'}
        textDecoration={'underline'}
        textUnderlineOffset={'4px'}
        _hover={{ textDecoration: 'none' }}
        _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
        marginTop={'16px'}
        // disabled={}
        // onClick={() => {}}
      >
        Load more
      </Text> */}
    </TableContainer>
  )
}
