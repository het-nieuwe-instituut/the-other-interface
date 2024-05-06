import { ImpactLargeTypographyVariants } from '@/features/ui/typography/variants'
import { ComponentModulesTitleModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTitleModule
}

export const TitleModule: React.FC<Props> = props => {
  return (
    <div className="w-full bg-inherit pt-2 pb-2">
      <h1 className={ImpactLargeTypographyVariants({ intent: 'xl' })}>{props.component.Title}</h1>
    </div>
  )
}
