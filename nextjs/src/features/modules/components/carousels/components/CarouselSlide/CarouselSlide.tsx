import { extractTriplyFields } from '@/features/modules/helpers/triplyDataExtractor'
import { Flex } from '@chakra-ui/react'
import React from 'react'

import {
  ComponentCoreCarouselItem,
  EnumComponentmodulescarouselType,
  EnumComponentcorecarouselitemType,
  Maybe,
} from 'src/generated/graphql'

import { CarouselHighlightItem } from '../CarouselHighlightItem/CarouselHighlightItem'
import { CarouselMaker } from '../CarouselMaker/CarouselMaker'
import { CarouselTheme } from '../CarouselTheme/CarouselTheme'
import { usePresenter } from './usePresenter'

interface Props {
  items: Maybe<ComponentCoreCarouselItem>[]
  key: number | string
  type: EnumComponentmodulescarouselType
  carouselRef: React.RefObject<HTMLDivElement>
}

export const CarouselSlide = (props: Props) => {
  const { items, key, type, carouselRef } = props
  const { itemWidth, justifySlide } = usePresenter(type, carouselRef)
  return (
    <Flex key={`${key}`} mb={'3'} justifyContent={justifySlide}>
      {items?.map((component, index) => {
        const record = component?.triply_record?.data?.attributes
        const {
          title: name,
          description,
          imageUrl: image,
        } = extractTriplyFields(
          {
            title: component?.name || '',
            description: component?.description || '',
            imageUrl: component?.picture?.data?.attributes?.url || '',
          },
          record
        )

        if (type === EnumComponentmodulescarouselType?.Makers) {
          return (
            <CarouselMaker
              src={image}
              key={index}
              name={name ?? ''}
              description={description ?? ''}
              boxSize={itemWidth}
            />
          )
        }

        if (type === EnumComponentmodulescarouselType?.Highlights) {
          return (
            <CarouselHighlightItem
              src={image}
              key={index}
              name={name ?? ''}
              description={description ?? ''}
              width={itemWidth}
            />
          )
        }

        if (type === EnumComponentmodulescarouselType.Themes) {
          return (
            <CarouselTheme
              key={index}
              name={name ?? ''}
              description={description ?? ''}
              boxSize={itemWidth}
            />
          )
        }

        if (type === EnumComponentmodulescarouselType.Combined) {
          if (component?.type === EnumComponentcorecarouselitemType.Maker) {
            return (
              <CarouselMaker
                src={image}
                key={index}
                name={name ?? ''}
                description={description ?? ''}
                boxSize={itemWidth}
              />
            )
          }

          if (component?.type === EnumComponentcorecarouselitemType.Highlight) {
            return (
              <CarouselHighlightItem
                src={image}
                key={index}
                name={name ?? ''}
                description={description ?? ''}
                width={itemWidth}
              />
            )
          }
        }
      })}
    </Flex>
  )
}
