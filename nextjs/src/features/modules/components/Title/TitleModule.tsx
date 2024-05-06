import { Title } from '@/features/ui/Title'
import { ComponentModulesTitleModule } from 'src/generated/graphql'

interface Props {
  component: ComponentModulesTitleModule
}

export const TitleModule: React.FC<Props> = props => {
  return (
    <div className="w-full bg-inherit pt-2 pb-2">
      <Title as={'h1'}>{props.component.Title}</Title>
    </div>
  )
}
