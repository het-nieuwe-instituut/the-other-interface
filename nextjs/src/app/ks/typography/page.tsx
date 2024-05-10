import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Times large:</p>
      <h1 className={cn(TypographyVariants({ times: '2xl' }))}>2 Extra large</h1>
      <h1 className={cn(TypographyVariants({ times: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ times: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ times: 'md' }))}>Medium</h1>
      <h1 className={cn(TypographyVariants({ times: 'sm' }))}>Small</h1>
      <h1 className={cn(TypographyVariants({ times: 'xs' }))}>Extra small</h1>
      Example: {`<h1 className={TypographyVariants({ times: '2xl' })}>2 Extra large</h1>`}
      <hr />
      <p>Impact large:</p>
      <h1 className={cn(TypographyVariants({ impact: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ impact: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ impact: 'md' }))}>Medium</h1>
      Example: {`<h1 className={TypographyVariants({ impact: 'xl' })}>Extra large</h1>`}
      <hr />
      <p>Social large:</p>
      <h1 className={cn(TypographyVariants({ social: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ social: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ social: 'md' }))}>Medium</h1>
      <h1 className={cn(TypographyVariants({ social: 'sm' }))}>Small</h1>
      <h1 className={cn(TypographyVariants({ social: 'placeholder' }))}>placeholder</h1>
      <h1 className={cn(TypographyVariants({ social: 'label' }))}>Label</h1>
      Example: {`<h1 className={TypographyVariants({ social: 'xl' })}>Extra large</h1>`}
    </div>
  )
}

export default Page
