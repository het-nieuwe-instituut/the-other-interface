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
        backgroundColor={'white'}
        px={6}
        pb={props.component.tableModuleLayout?.spacingBottom ?? undefined}
        pt={props.component.tableModuleLayout?.spacingTop ?? undefined}
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
      backgroundColor={'white'}
      px={6}
      pb={props.component.tableModuleLayout?.spacingBottom ?? undefined}
      pt={props.component.tableModuleLayout?.spacingTop ?? undefined}
    >
      <Text as={'h2'} textStyle={'h2'} pb={'md'}>
        {props.component.table?.data?.attributes?.name}
      </Text>
      {props.component.table?.data?.attributes?.description && (
        <Text pb={'md'}>{props.component.table?.data?.attributes?.description}</Text>
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
      <Table variant="simple">
        <Thead>
          <Tr>
            {head?.TableHeadItem?.map((item, index, array) => (
              <Th key={keyExtractor(item, index, array)}>{item?.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {body?.map((item, index, array) => (
            <Tr key={keyExtractor(item, index, array)}>
              {item?.TableBodyItem?.map((bodyItem, index, array) => (
                <Td key={keyExtractor(bodyItem, index, array)}>{bodyItem?.value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
