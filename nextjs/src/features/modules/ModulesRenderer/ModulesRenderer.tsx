import { HomepageQuery } from 'src/generated/graphql'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { Text } from '../components/Text/Text'

interface Props {
    components: HomePageComponents
}

type HomePageComponents = NonNullable<
    NonNullable<NonNullable<HomepageQuery['homepage']>['data']>['attributes']
>['components']

export function DynamicComponentRenderer(props: Props) {
    return (
        <>
            {props.components?.map(component => {
                const typeName = component?.__typename

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesTextModule') {
                        return <Text key={component.id} component={component} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesPullquote') {
                        return <Pullquote key={component.id} component={component} />
                    }
                }

                return null
            }) ?? null}
        </>
    )
}
