import { getTriplyOrStoryHref } from '@/features/editorial/components/getTriplyOrStoryHref'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { ImageParagraph } from '@/features/ui/components/ImageParagraph/ImageParagraph'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'
import { MuxAudioPlayer } from '@/features/ui/components/mux-audio/MuxAudioPlayer'
import { MuxVideoPlayer } from '@/features/ui/components/mux-video/MuxVideoPlayer'
import { Title } from '@/features/ui/components/title/Title'
import { cn } from '@/features/ui/utils/cn'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'
import { StoryByIdQuery } from 'src/generated/graphql'
import { Paragraph } from '../../ui/components/Paragraph/Paragraph'
import { ButtonGroup, JumboLinkButtonGroupItem } from '../../ui/components/button-group/component'
import { Subtitle } from '../../ui/components/subtitle/Subtitle'
import { ImageModuleWrapper } from '../components/ImageModuleWrapper'
import { Pullquote } from '../components/Pullquote/Pullquote'
import { imageBasePath } from '../modulesConstants'

interface Props {
  components: DynamicComponents
  isStoryPage?: boolean
}

export type DynamicComponents = NonNullable<
  NonNullable<StoryByIdQuery['storyByLocale']['data']>
>['components']

export function DynamicComponentRenderer({ components, isStoryPage = false }: Props) {
  const hasComponents = (components || []).length > 0
  const lang = useLocale()

  return (
    <div
      className={cn(
        'px-5 md:px-6 pt-0 flex flex-col gap-[40px]',
        isStoryPage && 'px-0',
        hasComponents && 'pt-10'
      )}
    >
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
            return (
              <ImageModuleWrapper
                key={keyExtractor(component.id, index, array)}
                component={component}
              />
            )
          }

          if (component?.__typename === 'ComponentModulesImageCarousel') {
            return (
              <ImageCarousel key={keyExtractor(component.id, index, array)}>
                {component.items?.map(item => {
                  const attributes = item.image.data?.attributes
                  const href = addLocaleToUrl(
                    getTriplyOrStoryHref({
                      story: item.story ?? undefined,
                      triply_record: item.triply_record ?? undefined,
                    }) ?? '',
                    lang
                  )
                  const url = attributes?.url
                    ? imageBasePath(attributes?.url.toString())
                    : undefined

                  if (!attributes || !attributes.height || !attributes.width || !url) {
                    return null
                  }
                  return (
                    <ImageCarouselItem
                      href={href}
                      key={item.id}
                      src={url}
                      // TODO: add alt text instead of caption
                      alt={attributes.caption ?? ''}
                      caption={attributes.caption ?? undefined}
                    />
                  )
                }) ?? []}
              </ImageCarousel>
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
              <ButtonGroup
                key={keyExtractor(component.id, index, array)}
                className={isStoryPage ? 'flex-wrap' : 'flex gap-4 bg-red-100 pb-4'}
              >
                {component.buttons.map(button => {
                  if (!button.text || !button.url) {
                    return null
                  }
                  return (
                    <JumboLinkButtonGroupItem
                      key={button.id}
                      href={button.url}
                      className={cn((component?.buttons || []).length > 1 ? 'mb-4' : '')}
                    >
                      {button.text}
                    </JumboLinkButtonGroupItem>
                  )
                })}
              </ButtonGroup>
            )
          }

          if (component?.__typename === 'ComponentModulesStandaloneLinks') {
            if (!component.standaloneLinks || component.standaloneLinks?.length === 0) {
              return null
            }
            return (
              <ButtonGroup key={keyExtractor(component.id, index, array)} className="flex gap-4">
                {component.standaloneLinks.map(link => {
                  if (!link.label || (!link.url && !link.attachment)) {
                    return null
                  }
                  const href =
                    (!link.attachment?.data ? link.url : link.attachment.data?.attributes?.url) ??
                    undefined

                  const variant = link.attachment?.data ? 'download' : 'link'

                  if (!href) return null

                  return (
                    <StandaloneLink href={href} variant={variant} key={link.id}>
                      {link.label}
                    </StandaloneLink>
                  )
                })}
              </ButtonGroup>
            )
          }

          // TODO: uncomment after component is connected to collections again
          //   if (component?.__typename === 'ComponentModulesCarousel') {
          //     return (
          //       <CarouselModule
          //         key={keyExtractor(component.id, index, array)}
          //         component={component as ComponentModulesCarousel}
          //       />
          //     )
          //   }

          if (component?.__typename === 'ComponentCoreStandAloneLink') {
            const href =
              (!component.attachment?.data
                ? component.url
                : component.attachment.data?.attributes?.url) ?? undefined

            const variant = component.attachment?.data ? 'download' : 'link'

            if (!href) return null
            return (
              <StandaloneLink href={href} variant={variant} key={component.id}>
                {component.label}
              </StandaloneLink>
            )
          }
          if (component?.__typename === 'ComponentCoreMuxAudio') {
            if (
              !component.muxAudioRelation?.data?.attributes?.playback_id ||
              !component.muxAudioRelation?.data?.attributes?.title
            )
              return <ErrorBox key={keyExtractor(component.id, index, array)} />

            return (
              <MuxAudioPlayer
                isReady={component.muxAudioRelation?.data?.attributes?.isReady}
                title={component.muxAudioRelation?.data?.attributes?.title}
                playbackId={component.muxAudioRelation?.data?.attributes?.playback_id}
                caption={component.caption}
                key={keyExtractor(component.id, index, array)}
              />
            )
          }

          if (component?.__typename === 'ComponentCoreMuxVideo') {
            if (
              !component.muxVideoRelation?.data?.attributes?.playback_id ||
              !component.muxVideoRelation?.data?.attributes?.title
            )
              return <ErrorBox key={keyExtractor(component.id, index, array)} />

            return (
              <MuxVideoPlayer
                isReady={component.muxVideoRelation?.data?.attributes?.isReady}
                title={component.muxVideoRelation?.data?.attributes?.title}
                playbackId={component.muxVideoRelation?.data?.attributes?.playback_id}
                caption={component.caption}
                aspectRatio={
                  component.muxVideoRelation?.data?.attributes?.aspect_ratio?.replace(':', ' / ') ??
                  '16 / 9'
                }
                key={keyExtractor(component.id, index, array)}
              />
            )
          }
          if (component?.__typename === 'ComponentModulesSideImageWithText') {
            if (
              !component.sideText ||
              !component.image.data?.attributes?.url ||
              !component.image.data?.attributes?.height ||
              !component.image.data?.attributes?.width ||
              !component.image.data?.attributes?.caption
            )
              return null
            return (
              <ImageParagraph
                sideText={component.sideText}
                imageSrc={component.image.data?.attributes?.url}
                imageHeight={component.image.data?.attributes?.height}
                imageWidth={component.image.data?.attributes?.width}
                imageCaption={component.image.data?.attributes?.caption}
                imageAltText={component.image_alt_text}
                key={keyExtractor(component.id, index, array)}
              />
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
