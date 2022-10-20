import { Box, useTheme } from '@chakra-ui/react'
import {
    ComponentModulesButtonsModule,
    ComponentModulesCarousel,
    ComponentModulesImage,
    ComponentModulesImageCarousel,
    HomepageComponentsDynamicZone,
    LandingpageComponentsDynamicZone,
    Maybe,
    MenupageComponentsDynamicZone,
    StoryComponentsDynamicZone,
} from 'src/generated/graphql'
import { ButtonsModule } from '../components/ButtonsModule/ButtonsModule'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'
import { GridModule } from '../components/GridModule/GridModule'
import MediaImage from '../components/Image/Image'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { SubtitleModule } from '../components/SubtitleModule/SubtitleModule'
import { TableModule } from '../components/TableModule/TableModule'
import { TextModule } from '../components/TextModule/TextModule'
import { Title } from '../components/Title/Title'
import { componentMock, componentMock2, componentMock3, ComponentModulesGridModule } from '../../../mocks/grid/mockGrid'

interface Props {
    components: DynamicComponents
}

type DynamicComponents =
    | Maybe<Array<HomepageComponentsDynamicZone>>
    | Maybe<Array<StoryComponentsDynamicZone>>
    | Maybe<Array<LandingpageComponentsDynamicZone>>
    | Maybe<Array<MenupageComponentsDynamicZone>>

export function DynamicComponentRenderer(props: Props) {
    const theme = useTheme()
    return (
        <Box maxW={theme.breakpoints.xl} marginX={'auto'}>
            {[...[componentMock, componentMock2, componentMock3], ...(props.components || [])].map(
                (component, index, array) => {
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

                        if (component?.__typename === 'ComponentModulesGridModule') {
                            return (
                                <GridModule
                                    key={keyExtractor(component.id, index, array)}
                                    component={component as ComponentModulesGridModule}
                                />
                            )
                        }
                    }
                    return null
                }
            ) ?? null}
        </Box>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
    return `${id}-${index}-${array.length}`
}
