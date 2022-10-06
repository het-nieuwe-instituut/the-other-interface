import {
    ComponentModulesImage,
    ComponentModulesImageCarousel,
    ComponentModulesCarousel,
    ComponentModulesButtonsModule,
    HomepageComponentsDynamicZone,
    Maybe,
    LandingpageComponentsDynamicZone,
    MenupageComponentsDynamicZone,
    StoryComponentsDynamicZone,
} from 'src/generated/graphql'
import MediaImage from '../components/Image/Image'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { SubtitleModule } from '../components/SubtitleModule/SubtitleModule'
import { TableModule } from '../components/TableModule/TableModule'
import { Title } from '../components/Title/Title'
import { TextModule } from '../components/TextModule/TextModule'
import { ButtonsModule } from '../components/ButtonsModule/ButtonsModule'
import { Box, useTheme } from '@chakra-ui/react'

interface Props {
    components: HomePageComponents
}

type HomePageComponents = Maybe<Array<HomepageComponentsDynamicZone>> | Maybe<Array<StoryComponentsDynamicZone>> | Maybe<Array<LandingpageComponentsDynamicZone>> |  Maybe<Array<MenupageComponentsDynamicZone>>
export function DynamicComponentRenderer(props: Props) {
    const theme = useTheme()
    return (
        <Box maxW={theme.breakpoints.xl} marginX={'auto'}>
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
                        return (
                            <MediaImage
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesImage}
                            />
                        )
                    }

                    if (component?.__typename === 'ComponentModulesImageCarousel') {
                        return (
                            <ImageCarousel
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesImageCarousel}
                            />
                        )
                    }

                    if (component?.__typename === 'ComponentModulesSubtitle') {
                        return <SubtitleModule key={component.id} component={component} />
                    }

                    if (component?.__typename === 'ComponentModulesTableModule') {
                        return <TableModule key={keyExtractor(component.id, index, array)} component={component} />
                    }

                    if (component?.__typename === 'ComponentModulesTitleModule') {
                        return <Title key={keyExtractor(component.id, index, array)} component={component} />
                    }

                    if (component?.__typename === 'ComponentModulesButtonsModule') {
                        return (
                            <ButtonsModule
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesButtonsModule}
                            />
                        )
                    }

                    if (component?.__typename === 'ComponentModulesCarousel') {
                        return (
                            <CarouselModule
                                key={keyExtractor(component.id, index, array)}
                                component={component as ComponentModulesCarousel}
                            />
                        )
                    }
                }
                return null
            }) ?? null}
        </Box>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
    return `${id}-${index}-${array.length}`
}
