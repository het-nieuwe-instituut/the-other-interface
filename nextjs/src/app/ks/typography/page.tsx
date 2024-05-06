import {
  ImpactLargeTypographyVariants,
  SocialLargeTypographyVariants,
  SocialMediumTypographyVariants,
  TimesLargeTypographyVariants,
} from '@/features/ui/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="gap-4 flex flex-col">
      <p>Times large:</p>

      <h1 className={cn(TimesLargeTypographyVariants({ intent: '2xl' }))}>2 Extra large</h1>
      <h1 className={cn(TimesLargeTypographyVariants({ intent: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TimesLargeTypographyVariants({ intent: 'lg' }))}>Large</h1>
      <h1 className={cn(TimesLargeTypographyVariants({ intent: 'md' }))}>Medium</h1>
      <h1 className={cn(TimesLargeTypographyVariants({ intent: 'sm' }))}>Small</h1>
      <h1 className={cn(TimesLargeTypographyVariants({ intent: 'xs' }))}>Extra small</h1>

      <hr />

      <p>Impact large:</p>

      <h1 className={cn(ImpactLargeTypographyVariants({ intent: 'xl' }))}>Extra large</h1>
      <h1 className={cn(ImpactLargeTypographyVariants({ intent: 'lg' }))}>Large</h1>
      <h1 className={cn(ImpactLargeTypographyVariants({ intent: 'md' }))}>Medium</h1>

      <hr />

      <p>Social large:</p>

      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'xl' }))}>Extra large</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'lg' }))}>Large</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'md' }))}>Medium</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'sm' }))}>Small</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'sidebar-title' }))}>
        Sidebar title
      </h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'footer-large' }))}>
        Footer large
      </h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'footer-small' }))}>
        Footer small
      </h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'search-large' }))}>Search</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'placeholder' }))}>placeholder</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'search-small' }))}>Search</h1>
      <h1 className={cn(SocialLargeTypographyVariants({ intent: 'label' }))}>Label</h1>

      <hr />

      <p>Social medium:</p>

      <h1 className={cn(SocialMediumTypographyVariants({ intent: 'xl' }))}>Extra large</h1>
      <h1 className={cn(SocialMediumTypographyVariants({ intent: 'lg' }))}>Large</h1>
      <h1 className={cn(SocialMediumTypographyVariants({ intent: 'md' }))}>Medium</h1>
      <h1 className={cn(SocialMediumTypographyVariants({ intent: 'sm' }))}>Small</h1>
      <h1 className={cn(SocialMediumTypographyVariants({ intent: 'xs' }))}>Extra small</h1>
    </div>
  )
}

export default Page
