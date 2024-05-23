import {
  ComponentCoreTableBody,
  ComponentCoreTableHeadItem,
  ComponentModulesTableModule,
  Maybe,
} from 'src/generated/graphql'

export interface TableModuleType {
  name: Maybe<string> | undefined
  description?: Maybe<string> | undefined
  tableBody: Maybe<ComponentCoreTableBody[]> | undefined
  tableHead: Maybe<ComponentCoreTableHeadItem[]> | undefined
}

export const tableMapper = (component: ComponentModulesTableModule) => {
  const name = component.table?.data?.attributes?.name
  const description = component.table?.data?.attributes?.description

  const tableBody = component.table?.data?.attributes?.TableBody
  const tableHead = component.table?.data?.attributes?.Tablehead?.TableHeadItem

  return {
    name,
    description,
    tableBody,
    tableHead,
  }
}
