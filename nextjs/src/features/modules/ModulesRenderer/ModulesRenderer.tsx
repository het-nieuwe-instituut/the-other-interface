import { ComponentModulesImage, HomepageQuery } from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { Text } from '../components/Text/Text'
import { Title } from '../components/Title/Title'

interface Props {
    components: HomePageComponents
}

type HomePageComponents = NonNullable<
    NonNullable<NonNullable<HomepageQuery['homepage']>['data']>['attributes']
>['components']

export function DynamicComponentRenderer(props: Props) {
    console.log(props)
    return (
        <>
            {props.components?.map((component, index, array) => {
                const typeName = component?.__typename

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesTextModule') {
                        return <Text key={keyExtractor(component.id, index, array)} component={component} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesPullquote') {
                        return <Pullquote key={keyExtractor(component.id, index, array)} component={component} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesImage') {
                        return <MediaImage key={component.id} component={component as ComponentModulesImage} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesTitleModule') {
                        return <Title key={component.id} component={component} />
                    }
                }

                return null
            }) ?? null}
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
    return `${id}-${index}-${array.length}`
}
