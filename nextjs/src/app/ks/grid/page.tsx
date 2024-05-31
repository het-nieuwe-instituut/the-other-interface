import { EditorialPageWrapper } from '@/features/editorial/components/EditorialPageWrapper'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { times } from 'lodash'
import type { NextPage } from 'next'

const GridDemo = () => {
  return (
    <div className="absolute m-0 box-border grid h-full w-[calc(100%-80px)] grid-cols-6 gap-3  p-0 lg:grid-cols-12">
      {times(12, index => (
        <div className="bg-blue-500 opacity-20" key={index}>
          {index}
        </div>
      ))}
    </div>
  )
}

const LegendItem = ({
  className,
  visualClassName,
  name,
}: {
  className?: string
  visualClassName?: string
  name: string
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn('mr-2 size-6', visualClassName)}></div>
      <p className="text-sm">{name}</p>
    </div>
  )
}

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <LegendItem name="Page * Margin 40px" visualClassName="border-black border bg-gray-50" />
          <LegendItem name="Columns * 12 columns w/ 12px gutter" visualClassName="bg-blue-300" />
        </div>
        <EditorialPageWrapper className="flex-1 border border-black bg-gray-50">
          <div className=" grid grid-cols-6 gap-3 bg-blue-200 lg:grid-cols-12">
            {times(12, index => (
              <div className="h-20 bg-blue-300" key={index}>
                {index}
              </div>
            ))}
          </div>
        </EditorialPageWrapper>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <p>Landing page</p>
            <LegendItem
              name="Page * Margin 40px"
              visualClassName="border-black border bg-gray-50"
            />
            <LegendItem name="Columns * 12 columns w/ 12px gutter" visualClassName="bg-blue-300" />
            <p>Sections displayed by colors</p>
          </div>
          <EditorialPageWrapper className="relative box-border flex-1 overflow-hidden border border-black bg-gray-50">
            <GridDemo />
            <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
              <div className="col-span-6 bg-green-300 lg:col-span-12">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  Page title
                </p>
                <p className={TypographyVariants({ social: 'sm' })}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam modi,
                  consequuntur sapiente expedita nam labore odit ratione aut sint explicabo, fugit,
                  quidem rem totam ex officia iste earum atque?
                </p>
              </div>
              <div className="col-span-6 bg-orange-300 lg:col-span-12">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  New on collection
                </p>
                <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
                  {times(2, index => (
                    <div className="col-span-6 h-40 bg-pink-600" key={index}>
                      {index}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </EditorialPageWrapper>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <p>Record page</p>
            <LegendItem
              name="Page * Margin 40px"
              visualClassName="border-black border bg-gray-50"
            />
            <LegendItem name="Columns * 12 columns w/ 12px gutter" visualClassName="bg-blue-300" />
            <p>Sections displayed by colors</p>
          </div>
          <EditorialPageWrapper className="relative box-border flex-1 overflow-hidden border border-black bg-gray-50">
            <GridDemo />
            <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
              <div className="col-span-6 bg-green-300 lg:col-span-8">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  Page title
                </p>
                <p className={TypographyVariants({ social: 'sm' })}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam modi,
                  consequuntur sapiente expedita nam labore odit ratione aut sint explicabo, fugit,
                  quidem rem totam ex officia iste earum atque?
                </p>
              </div>
              <div className="col-span-6 bg-purple-300 lg:col-start-10 lg:col-end-13">
                <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>
                  details
                </p>
                <p className={TypographyVariants({ social: 'sm', className: 'mb-2' })}>
                  this is a detail of a detail page
                </p>
                <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>
                  details
                </p>
                <p className={TypographyVariants({ social: 'sm' })}>Some more details</p>
              </div>
              <div className="col-span-6 bg-orange-300 lg:col-span-8">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  New on collection
                </p>
                <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
                  {times(2, index => (
                    <div className="col-span-6 h-40 bg-pink-600" key={index}>
                      {index}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </EditorialPageWrapper>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <p>Story page</p>
            <LegendItem
              name="Page * Margin 40px"
              visualClassName="border-black border bg-gray-50"
            />
            <LegendItem name="Columns * 12 columns w/ 12px gutter" visualClassName="bg-blue-300" />
            <p>Sections displayed by colors</p>
          </div>
          <EditorialPageWrapper className="relative box-border flex-1 overflow-hidden border border-black bg-gray-50">
            <GridDemo />
            <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
              <div className="col-span-6 bg-green-300 lg:col-span-7">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  Page title
                </p>
                <p className={TypographyVariants({ social: 'sm' })}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam modi,
                  consequuntur sapiente expedita nam labore odit ratione aut sint explicabo, fugit,
                  quidem rem totam ex officia iste earum atque?
                </p>
              </div>
              <div className="col-span-6 bg-purple-300 lg:col-start-9 lg:col-end-13">
                <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>
                  details
                </p>
                <p className={TypographyVariants({ social: 'sm', className: 'mb-2' })}>
                  this is a detail of a detail page
                </p>
                <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>
                  details
                </p>
                <p className={TypographyVariants({ social: 'sm' })}>Some more details</p>
              </div>
              <div className="col-span-6 bg-orange-300 lg:col-span-12">
                <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>
                  New on collection
                </p>
                <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
                  {times(2, index => (
                    <div className="col-span-6 h-40 bg-pink-600" key={index}>
                      {index}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </EditorialPageWrapper>
        </div>
      </div>
    </div>
  )
}

export default Page
