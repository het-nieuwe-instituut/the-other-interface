import { Box, Text } from '@chakra-ui/react'
import { modulesSpacingMapper } from '../../modulesSpacing'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import React from 'react'
import Link from 'next/link'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { keyExtractor } from '@/features/shared/utils/lists'

interface Props {
  component?: TableModuleType
  LoadMore?: React.ReactNode
  count?: string
}

interface TableModuleType {
  type?: string
  name?: string | null
  description?: string | null
  tableBody?: TableBody[] | null
  tableHead?: TableHeadItem[] | null
}

interface TableBody {
  id: string
  TableBodyItem?: { id: string; value?: string }[] | null
}

interface TableHeadItem {
  id: string
  label?: string
}

export const TableModule: React.FC<Props> = props => {
  const { component, LoadMore, count } = props

  if (!component) {
    return null
  }

  return (
    <Box
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.TableModule.spacingTop}
      pb={modulesSpacingMapper?.TableModule.spacingBottom}
    >
      <div className="relative flex">
        <h2 className={cn(TypographyVariants({ responsive: 'title' }), 'mb-4')}>
          {component.name}
        </h2>
        <span
          className={cn(TypographyVariants({ socialLarge: 'xl' }), 'relative top-0 -right-2 bold')}
        >
          {count ? `${count}` : ''}
        </span>
      </div>

      {component.description && (
        <Text pb={'md'} textStyle={'socialLarge.lg'}>
          {component.description}
        </Text>
      )}
      <ResponsiveTable component={component} LoadMore={LoadMore} />
    </Box>
  )
}

const ResponsiveTable: React.FC<Props> = ({ component, LoadMore }: Props) => {
  const lang = useLocale()
  if (!component) return null

  return (
    <div className="bg-inherit">
      <div className="hidden lg:block">
        <table className="min-w-full">
          <thead className="hidden lg:table-header-group">
            <tr className="tr-border-gradient">
              {component.tableHead?.map((item, i) => (
                <th
                  key={keyExtractor(item.id, i, component.tableHead!)}
                  className={cn(
                    TypographyVariants({ socialLarge: 'sidebarTitle' }),
                    'text-black-100 text-left py-2 pr-2'
                  )}
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {component.tableBody?.map((item, rowIndex) => (
              <tr key={rowIndex} className="tr-border-gradient">
                {item.TableBodyItem?.map((bodyItem, cellIndex) => (
                  <td
                    key={bodyItem.id}
                    className={cn(
                      TypographyVariants({ socialLarge: cellIndex === 0 ? 'xl' : 'lg' }),
                      'text-left, py-6 pr-2 cursor-pointer'
                    )}
                  >
                    <Link href={`/detail/${component.type}/${item.id}?lang=${lang}`}>
                      {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden">
        {component.tableBody?.map((item, rowIndex) => (
          <div key={rowIndex} className="tr-border-gradient flex flex-col justify-center py-4">
            {item.TableBodyItem?.map((bodyItem, cellIndex) => (
              <Link href={`/detail/${component.type}/${item.id}?lang=${lang}`} key={bodyItem.id}>
                <span
                  key={bodyItem.id}
                  className={TypographyVariants({ socialLarge: cellIndex === 0 ? 'xl' : 'lg' })}
                >
                  {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {LoadMore}
    </div>
  )
}
