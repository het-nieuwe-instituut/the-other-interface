import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { times } from 'lodash'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <div className="absolute grid h-screen w-screen grid-cols-6  gap-3 lg:grid-cols-12">
        {times(12, index => (
          <div className="bg-red-500 opacity-20" key={index}>
            {index}
          </div>
        ))}
      </div>
      <div className="grid h-screen w-screen grid-cols-6 gap-3 lg:grid-cols-12">
        <div className="col-span-6 bg-green-300 lg:col-span-8">
          <p className={TypographyVariants({ impact: 'xl', className: 'font-bold' })}>Page title</p>
          <p className={TypographyVariants({ social: 'sm' })}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam modi,
            consequuntur sapiente expedita nam labore odit ratione aut sint explicabo, fugit, quidem
            rem totam ex officia iste earum atque?
          </p>
        </div>
        <div className="col-span-6 bg-purple-300 lg:col-start-10 lg:col-end-13">
          <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>details</p>
          <p className={TypographyVariants({ social: 'sm', className: 'mb-2' })}>
            this is a detail of a detail page
          </p>
          <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>details</p>
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
    </>
  )
}

export default Page
