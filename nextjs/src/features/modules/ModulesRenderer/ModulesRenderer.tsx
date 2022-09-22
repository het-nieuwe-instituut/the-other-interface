import { ComponentModulesImage, ComponentModulesImageCarousel, HomepageQuery, ComponentModulesCarousel } from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { Text } from '../components/Text/Text'

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

                    if (component?.__typename === 'ComponentModulesPullquote') {
                        return <Pullquote key={keyExtractor(component.id, index, array)} component={component} />
                    }

                    if (component?.__typename === 'ComponentModulesImage') {
                        return <MediaImage key={component.id} component={component as ComponentModulesImage} />
                    }  

                    if (component?.__typename === 'ComponentModulesImageCarousel') {
                        return <ImageCarousel key={component.id} component={component as ComponentModulesImageCarousel} />
                    }

                    if(component?.__typename === 'ComponentModulesCarousel') {
                        return <CarouselModule key={155} component={component as ComponentModulesCarousel} />
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
