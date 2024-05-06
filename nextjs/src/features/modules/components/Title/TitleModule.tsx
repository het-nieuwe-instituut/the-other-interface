import { TypographyVariants } from '@/features/ui/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { ComponentModulesTitleModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTitleModule
}

export const TitleModule: React.FC<Props> = props => {
  return (
    <h1 className={cn(TypographyVariants({ impact: 'xl' }), 'pb-4')}>{props.component.Title}</h1>
  )
}
