import { ComponentModulesImage, HomepageQuery } from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { TextModule } from '../components/TextModule/TextModule'

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
                        return <TextModule key={keyExtractor(component.id, index, array)} component={component} />
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

                return null
            }) ?? null}
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
    return `${id}-${index}-${array.length}`
}
