import { TypographyVariants } from '@/features/ui/typography/variants'
import { ComponentModulesTitleModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTitleModule
}

export const TitleModule: React.FC<Props> = props => {
  return (
    <div className="w-full bg-inherit pb-4">
      <h1 className={TypographyVariants({ impact: 'xl' })}>{props.component.Title}</h1>
    </div>
  )
}
