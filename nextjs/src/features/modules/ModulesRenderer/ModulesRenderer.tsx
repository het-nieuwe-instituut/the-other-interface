import { ImageWithCaption } from '@/features/ui/components/image-with-caption/ImageWithCaption'
import { ImageWithCaptionLink } from '@/features/ui/components/image-with-caption/ImageWithCaptionLink'
import { Title } from '@/features/ui/components/title/Title'
import { cn } from '@/features/ui/utils/cn'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'
import {
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
import { Paragraph } from '../../ui/components/Paragraph/Paragraph'
import { ButtonGroup, LinkButtonGroupItem } from '../../ui/components/button-group/component'
import { Subtitle } from '../../ui/components/subtitle/Subtitle'
import { GridModule } from '../components/GridModule/GridModule'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { CarouselModule } from '../components/carousels/Carousel/Carousel'
import { ImageCarousel } from '../components/carousels/ImageCarousel/ImageCarousel'
import { mapUploadFileEntitiesToStoryImageInfo } from '../components/carousels/ImageCarousel/imageCarouselStrapiDataMapper'

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
  const hasComponents = (components || []).length > 0

  return (
    <div
      className={cn(
        'max-w-[90em] mx-auto px-6 pt-0 flex flex-col gap-[40px]',
        isStoryPage && 'px-0',
        hasComponents && 'pt-10'
      )}
    >
      {/* {[...[componentMock, componentMock2, componentMock3], ...(props.components || [])].map( */}
      {[...(components || [])].map((component, index, array) => {
        const typeName = component?.__typename

        if (typeName) {
          if (component?.__typename === 'ComponentModulesTextModule') {
            if (!component.Richtext) {
              return null
            }
            return (
              <Paragraph key={keyExtractor(component.id, index, array)}>
                {component.Richtext}
              </Paragraph>
            )
          }

          if (component?.__typename === 'ComponentModulesPullquote') {
            if (!component.text) {
              return null
            }
            return (
              <Pullquote key={keyExtractor(component.id, index, array)}>{component.text}</Pullquote>
            )
          }

          if (component?.__typename === 'ComponentModulesImage') {
            const src = component.image?.data?.attributes?.url
            const alt = component.alt_text
            const height = component.image?.data?.attributes?.height
            const width = component.image?.data?.attributes?.width
            const recordHref = component.triplyRecord
              ? getPathByTriplyRecord(component.triplyRecord)
              : undefined
            const storyHref = component.story
              ? getPathByStory(component.story.data?.id ?? undefined)
              : undefined

            if (!src || !alt || !height || !width) {
              return null
            }
            if (recordHref || storyHref) {
              return (
                <ImageWithCaptionLink
                  href={recordHref ?? storyHref ?? ''}
                  key={keyExtractor(component.id, index, array)}
                  src={src}
                  alt={alt}
                  height={height}
                  width={width}
                  caption={component.caption ?? undefined}
                />
              )
            }
            return (
              <ImageWithCaption
                key={keyExtractor(component.id, index, array)}
                src={src}
                alt={alt}
                height={height}
                width={width}
                caption={component.caption ?? undefined}
              />
            )
          }

          if (component?.__typename === 'ComponentModulesImageCarousel') {
            return (
              <ImageCarousel
                key={keyExtractor(component.id, index, array)}
                images={mapUploadFileEntitiesToStoryImageInfo(
                  component as ComponentModulesImageCarousel
                )}
              />
            )
          }

          if (component?.__typename === 'ComponentModulesSubtitle') {
            const nextComponent = array.at(index + 1)
            // we need to adjust for 16px between components like text module
            const shouldAdjustForNextComponent = nextComponent?.__typename
              ? ['ComponentModulesTextModule'].includes(nextComponent?.__typename)
              : false
            if (!component.text) {
              return null
            }

            return (
              <Subtitle key={component.id} className={cn(shouldAdjustForNextComponent && '-mb-8')}>
                {component.text}
              </Subtitle>
            )
          }

          if (component?.__typename === 'ComponentModulesTitleModule') {
            const nextComponent = array.at(index + 1)
            // we need to adjust for 16px between components like text module
            const shouldAdjustForNextComponent = nextComponent?.__typename
              ? ['ComponentModulesTextModule'].includes(nextComponent?.__typename)
              : false

            const title = component.Title

            if (!title) {
              return null
            }
            return (
              <Title
                className={cn(shouldAdjustForNextComponent && '-mb-8')}
                key={keyExtractor(component.id, index, array)}
              >
                {title}
              </Title>
            )
          }

          if (component?.__typename === 'ComponentModulesButtonsModule') {
            if (!component.buttons || component.buttons?.length === 0) {
              return null
            }
            return (
              <ButtonGroup key={keyExtractor(component.id, index, array)}>
                {component.buttons.map(button => {
                  if (!button.text || !button.url) {
                    return null
                  }
                  return (
                    <LinkButtonGroupItem key={button.id} href={button.url}>
                      {button.text}
                    </LinkButtonGroupItem>
                  )
                })}
              </ButtonGroup>
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

          if (component?.__typename === 'ComponentCoreStandAloneLink') {
            const href =
              (!component.attachment?.data
                ? component.url
                : component.attachment.data?.attributes?.url) ?? undefined
            const variant = !component.attachment?.data ? 'link' : 'download'

            if (!href) return null
            return (
              <StandaloneLink href={href} variant={variant} key={component.id}>
                {component.label}
              </StandaloneLink>
            )
          }
        }
        return null
      }) ?? null}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
  return `${id}-${index}-${array.length}`
}

function getPathByTriplyRecord(triplyRecord: ComponentModulesImage['triplyRecord']) {
  const type = triplyRecord?.data?.attributes?.type?.toLocaleLowerCase()
  const recordId = triplyRecord?.data?.attributes?.recordId
  if (!type || !recordId) {
    return undefined
  }
  return `/detail/${type}/${recordId}`
}

function getPathByStory(id?: string) {
  if (!id) {
    return undefined
  }
  return `/detail/stories/${id}`
}
