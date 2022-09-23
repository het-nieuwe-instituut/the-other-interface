import React from 'react'
import {  Flex } from '@chakra-ui/react'
import { ComponentCoreCarouselItem, EnumComponentmodulescarouselType, EnumComponentcorecarouselitemType, Maybe } from 'src/generated/graphql';
import { imageBasePath } from '@/features/modules/modulesConstants';
import { CarouselMaker } from '../CarouselMaker/CarouselMaker';
import { CarouselHighlightItem } from '../CarouselHighlightItem/CarouselHighlightItem';
import { CarouselTheme } from '../CarouselTheme/CarouselTheme';
import { usePresenter } from './usePresenter';

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
                    const image = component?.picture?.data?.attributes
                    const imagePath = imageBasePath + image?.url

                    if (type === EnumComponentmodulescarouselType.Makers) {
                        return (
                            <CarouselMaker
                                src={imagePath}
                                key={index}
                                name={component?.name ?? ''}
                                description={component?.description ?? ''}
                                boxSize={itemWidth}
                            />
                        )
                    }

                    if (type === EnumComponentmodulescarouselType.Highlights) {
                        return (
                            <CarouselHighlightItem
                                src={imagePath}
                                key={index}
                                name={component?.name ?? ''}
                                description={component?.description ?? ''}
                             />
                        )
                    }

                    if(type === EnumComponentmodulescarouselType.Themes) {
                        return (
                            <CarouselTheme
                                key={index}
                                name={component?.name ?? ''}
                                description={component?.description ?? ''}
                                boxSize={itemWidth}
                             />
                        )
                    }

                    if(type === EnumComponentmodulescarouselType.Combined) {
                        if (component?.type === EnumComponentcorecarouselitemType.Maker) {
                            return (
                                <CarouselMaker
                                    src={imagePath}
                                    key={index}
                                    name={component?.name ?? ''}
                                    description={component?.description ?? ''}
                                    boxSize={itemWidth}
                                />
                            )
                        }

                        if(component?.type === EnumComponentcorecarouselitemType.Highlight) {
                            return (
                                <CarouselHighlightItem
                                    src={imagePath}
                                    key={index}
                                    name={component?.name ?? ''}
                                    description={component?.description ?? ''}
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