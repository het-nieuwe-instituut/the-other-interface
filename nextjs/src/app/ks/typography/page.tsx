import { Typography } from '@/features/ui/typography/component'
import { TypographyVariants } from '@/features/ui/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="gap-4 flex flex-col">
      <p>Times large:</p>

      <h1 className={cn(TypographyVariants({ times: '2xl' }))}>2 Extra large</h1>
      <h1 className={cn(TypographyVariants({ times: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ times: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ times: 'md' }))}>Medium</h1>
      <h1 className={cn(TypographyVariants({ times: 'sm' }))}>Small</h1>
      <h1 className={cn(TypographyVariants({ times: 'xs' }))}>Extra small</h1>
      {/* or you can use the shorthand :
      <Typography times={'xs} as="h1">
        Extra small
      </Typography> */}

      <hr />

      <p>Impact large:</p>

      <h1 className={cn(TypographyVariants({ impact: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ impact: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ impact: 'md' }))}>Medium</h1>
      {/* or you can use the shorthand :
      <Typography impact={'xs'} as="h1">
        Extra small
      </Typography> */}

      <hr />

      <p>Social large:</p>

      <h1 className={cn(TypographyVariants({ socialLarge: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'md' }))}>Medium</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'sm' }))}>Small</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'sidebar-title' }))}>Sidebar title</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'footer-large' }))}>Footer large</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'footer-small' }))}>Footer small</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'search-large' }))}>Search</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'placeholder' }))}>placeholder</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'search-small' }))}>Search</h1>
      <h1 className={cn(TypographyVariants({ socialLarge: 'label' }))}>Label</h1>
      {/* or you can use the shorthand :
      <Typography socialLarge={'xs'} as="h1">
        Extra small
      </Typography> */}

      <hr />

      <p>Social medium:</p>

      <h1 className={cn(TypographyVariants({ socialMedium: 'xl' }))}>Extra large</h1>
      <h1 className={cn(TypographyVariants({ socialMedium: 'lg' }))}>Large</h1>
      <h1 className={cn(TypographyVariants({ socialMedium: 'md' }))}>Medium</h1>
      <h1 className={cn(TypographyVariants({ socialMedium: 'sm' }))}>Small</h1>
      <h1 className={cn(TypographyVariants({ socialMedium: 'xs' }))}>Extra small</h1>
      {/* or you can use the shorthand :
      <Typography socialMedium={'xs'} as="h1">
        Extra small
      </Typography> */}
    </div>
  )
}

export default Page
