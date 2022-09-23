import { ComponentModulesImage, ComponentModulesImageCarousel, HomepageQuery, ComponentModulesCarousel } from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { SubtitleModule } from '../components/SubtitleModule/SubtitleModule'
import { TableModule } from '../components/TableModule/TableModule'
import { Title } from '../components/Title/Title'
import { TextModule } from '../components/TextModule/TextModule'

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

                    if (component?.__typename === 'ComponentModulesPullquote') {
                        return <Pullquote key={keyExtractor(component.id, index, array)} component={component} />
                    }

                    if (component?.__typename === 'ComponentModulesImage') {
                        return <MediaImage key={keyExtractor(component.id, index, array)} component={component as ComponentModulesImage} />
                    }  

                    if (component?.__typename === 'ComponentModulesImageCarousel') {
                        return (
                            <ImageCarousel key={keyExtractor(component.id, index, array)} component={component as ComponentModulesImageCarousel} />
                        )
                    }

                    if(component?.__typename === 'ComponentModulesCarousel') {
                        return <CarouselModule key={keyExtractor(component.id, index, array)} component={component as ComponentModulesCarousel} />
                    }

                    if (typeName) {
                        if (component?.__typename === 'ComponentModulesSubtitle') {
                            return <SubtitleModule key={component.id} component={component} />
                        }
                    }
    
                    if (typeName) {
                        if (component?.__typename === 'ComponentModulesTableModule') {
                            return <TableModule key={component.id} component={component} />
                        }
                    }
    
                    if (typeName) {
                        if (component?.__typename === 'ComponentModulesTitleModule') {
                            return <Title key={component.id} component={component} />
                        }
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
