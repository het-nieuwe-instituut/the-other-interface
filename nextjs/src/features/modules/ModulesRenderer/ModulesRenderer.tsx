import {
    ComponentModulesButtonsModule,
    ComponentModulesImage,
    ComponentModulesImageCarousel,
    HomepageQuery,
} from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { TableModule } from '../components/TableModule/TableModule'
import { Title } from '../components/Title/Title'
import { TextModule } from '../components/TextModule/TextModule'
import { ButtonsModule } from '../components/ButtonsModule/ButtonsModule'

interface Props {
    components: HomePageComponents
}

type HomePageComponents = NonNullable<
    NonNullable<NonNullable<HomepageQuery['homepage']>['data']>['attributes']
>['components']

export function DynamicComponentRenderer(props: Props) {
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
                        return (
                            <MediaImage
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesImage}
                            />
                        )
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesTableModule') {
                        return <TableModule key={keyExtractor(component.id, index, array)} component={component} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesTitleModule') {
                        return <Title key={keyExtractor(component.id, index, array)} component={component} />
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesImageCarousel') {
                        return (
                            <ImageCarousel
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesImageCarousel}
                            />
                        )
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesImageCarousel') {
                        return (
                            <ImageCarousel
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesImageCarousel}
                            />
                        )
                    }
                }

                if (typeName) {
                    if (component?.__typename === 'ComponentModulesButtonsModule') {
                        return (
                            <ButtonsModule
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesButtonsModule}
                            />
                        )
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
