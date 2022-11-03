import React from 'react'
import {  Flex } from '@chakra-ui/react'
import { ComponentCoreCarouselItem, EnumComponentmodulescarouselType, EnumComponentcorecarouselitemType, Maybe, TriplyRecord } from 'src/generated/graphql';
import { CarouselMaker } from '../CarouselMaker/CarouselMaker';
import { CarouselHighlightItem } from '../CarouselHighlightItem/CarouselHighlightItem';
import { CarouselTheme } from '../CarouselTheme/CarouselTheme';
import { usePresenter } from './usePresenter';
import { extractDataFromTripley } from '@/features/modules/helpers/modulesHelpers';

interface Props {
    items: Maybe<ComponentCoreCarouselItem>[]
    key: number | string
    type: EnumComponentmodulescarouselType
    carouselRef: React.RefObject<HTMLDivElement>
}

export const CarouselSlide = (props: Props) => {
    const { items, key, type, carouselRef } = props;
    const { itemWidth, justifySlide } = usePresenter(type, carouselRef);
        return (
            <Flex key={`${key}`} mb={'3'} justifyContent={justifySlide}>
                {items?.map((component, index) => {
                    const record = component?.triply_record?.data?.attributes
                    const {image, name, description} = extractDataFromTripley(record as TriplyRecord, component)

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

                    if(type === EnumComponentmodulescarouselType.Themes) {
                        return (
                            <CarouselTheme
                                key={index}
                                name={name ?? ''}
                                description={description ?? ''}
                                boxSize={itemWidth}
                             />
                        )
                    }

                    if(type === EnumComponentmodulescarouselType.Combined) {
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

                        if(component?.type === EnumComponentcorecarouselitemType.Highlight) {
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
                })
                }
            </Flex>
        )                                
 }