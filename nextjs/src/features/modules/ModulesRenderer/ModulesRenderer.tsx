import { Box, useTheme } from '@chakra-ui/react'
import {
  ComponentModulesButtonsModule,
  ComponentModulesCarousel,
  ComponentModulesGridModule,
  ComponentModulesImage,
  ComponentModulesImageCarousel,
  HomepageComponentsDynamicZone,
  HomepageQuery,
  LandingpageBySlugQuery,
  Maybe,
  MenupageComponentsDynamicZone,
  StoryByIdQuery,
} from 'src/generated/graphql'
import { ButtonsModule } from '../components/ButtonsModule/ButtonsModule'
import { GridModule } from '../components/GridModule/GridModule'
import MediaImage from '../components/Image/Image'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { SubtitleModule } from '../components/SubtitleModule/SubtitleModule'
import { TableModule } from '../components/TableModule/TableModule'
import { TextModule } from '../components/TextModule/TextModule'
import { Title } from '../components/Title/Title'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'

interface Props {
  components: DynamicComponents
  isStoryPage?: boolean
}

export type DynamicComponents =
  | NonNullable<NonNullable<HomepageQuery['homepage']['data']>['attributes']>['components']
  | NonNullable<
      NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
    >['components']
  | Maybe<Array<HomepageComponentsDynamicZone>>
  | NonNullable<NonNullable<StoryByIdQuery['storyByLocale']['data']>['attributes']>['components']
  | Maybe<Array<MenupageComponentsDynamicZone>>

export function DynamicComponentRenderer({ components, isStoryPage = false }: Props) {
  const theme = useTheme()
  const hasComponents = (components || []).length > 0

  return (
    <Box
      maxW={theme.breakpoints.xl}
      marginX={'auto'}
      px={isStoryPage ? 0 : 6}
      pt={hasComponents ? 'Xl' : 0}
    >
      {/* {[...[componentMock, componentMock2, componentMock3], ...(props.components || [])].map( */}
      {[...(components || [])].map((component, index, array) => {
        const typeName = component?.__typename

        if (typeName) {
          if (component?.__typename === 'ComponentModulesTextModule') {
            return (
              <TextModule key={keyExtractor(component.id, index, array)} component={component} />
            )
          }

          if (component?.__typename === 'ComponentModulesPullquote') {
            return (
              <Pullquote key={keyExtractor(component.id, index, array)} component={component} />
            )
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
            return (
              <TableModule key={keyExtractor(component.id, index, array)} component={component} />
            )
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
      }) ?? null}
    </Box>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
  return `${id}-${index}-${array.length}`
}
