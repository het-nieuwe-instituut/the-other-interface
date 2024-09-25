import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import React from 'react'
import Link from 'next/link'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { keyExtractor } from '@/features/shared/utils/lists'
import { Subtitle } from '@/features/ui/components/subtitle/Subtitle'
import { useRouter } from 'next/navigation'
import Asterisk from '../../../ui/icons/asterisk-thin-large.svg'
import { AsteriskTooltip } from '@/features/ui/components/tooltip/AsteriskTooltip'

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
  TableBodyItem?: { id: string; value?: string; asterisk?: boolean }[] | null
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
    <div className="flex flex-col gap-4 bg-inherit">
      <div className="relative flex">
        <div>
          <Subtitle>{component.name ?? ''}</Subtitle>
        </div>
        <span
          className={cn(TypographyVariants({ socialLarge: 'xl' }), 'relative top-0 -right-2 bold')}
        >
          {count ? `${count}` : ''}
        </span>
      </div>

      {component.description && (
        <p className={TypographyVariants({ responsive: 'paragraph' })}>{component.description}</p>
      )}

      <ResponsiveTable component={component} LoadMore={LoadMore} />
    </div>
  )
}

const ResponsiveTable: React.FC<Props> = ({ component, LoadMore }: Props) => {
  const lang = useLocale()
  const router = useRouter()
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
              <tr
                onClick={() => {
                  router.push(`/detail/${component.type}/${item.id}?lang=${lang}`)
                }}
                key={rowIndex}
                className="tr-border-gradient hover:bg-black-100 hover:text-ivory-100 active:bg-black-100 active:text-ivory-100"
              >
                {item.TableBodyItem?.map((bodyItem, cellIndex) => (
                  <>
                    {bodyItem.asterisk && cellIndex === 0 ? (
                      <AsteriskTooltip place="bottom" title={'test'}>
                        <td
                          key={bodyItem.id}
                          className={cn(
                            TypographyVariants({ socialLarge: cellIndex === 0 ? 'xl' : 'lg' }),
                            'text-left, py-6 pr-2 cursor-pointer'
                          )}
                        >
                          <div className="flex flex-row">
                            {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                            <div className="pl-1 text-surface-asterisk-dark">
                              <Asterisk />
                            </div>
                          </div>
                        </td>
                      </AsteriskTooltip>
                    ) : (
                      <td
                        key={bodyItem.id}
                        className={cn(
                          TypographyVariants({ socialLarge: cellIndex === 0 ? 'xl' : 'lg' }),
                          'text-left, py-6 pr-2 cursor-pointer'
                        )}
                      >
                        {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                      </td>
                    )}
                  </>
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
              <>
                {bodyItem.asterisk && cellIndex === 0 ? (
                  <Link
                    href={`/detail/${component.type}/${item.id}?lang=${lang}`}
                    key={bodyItem.id}
                  >
                    <AsteriskTooltip place="bottom" title={'test'} className="flex flex-row">
                      <span
                        key={bodyItem.id}
                        className={TypographyVariants({
                          socialLarge: cellIndex === 0 ? 'xl' : 'lg',
                        })}
                      >
                        {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                      </span>
                      <div className="pl-1 text-surface-asterisk-dark">
                        <Asterisk />
                      </div>
                    </AsteriskTooltip>
                  </Link>
                ) : (
                  <Link
                    href={`/detail/${component.type}/${item.id}?lang=${lang}`}
                    key={bodyItem.id}
                  >
                    <span
                      key={bodyItem.id}
                      className={TypographyVariants({ socialLarge: cellIndex === 0 ? 'xl' : 'lg' })}
                    >
                      {Boolean(bodyItem.value) ? bodyItem.value : 'n/a'}
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
      {LoadMore}
    </div>
  )
}
