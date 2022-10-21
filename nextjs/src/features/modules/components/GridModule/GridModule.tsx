/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { take } from 'lodash'
import { useState } from 'react'
import {
    ComponentCoreGridItem,
    ComponentModulesGridModule,
    EnumComponentfieldTypes,
} from '../../../../mocks/grid/mockGrid'
import NextLink from 'next/link'

interface Props {
    component: ComponentModulesGridModule
}

export const GridModule: React.FC<Props> = props => {
    const pageSize = props.component.pageSize || 6
    const [showAmount, setShowAmount] = useState(pageSize)
    const allFieldsAreShown = showAmount === props.component.fields?.length

    return (
        <Box
            width="100%"
            px={6}
            backgroundColor={'white'}
            paddingBottom={props.component.gridModuleLayout?.spacingBottom || undefined}
            paddingTop={props.component.gridModuleLayout?.spacingTop || undefined}
        >
            {renderTitle()}
            {renderDescription()}
            {renderFields()}
            {renderButtons()}
        </Box>
    )

    function renderTitle() {
        if (!props.component.title) {
            return
        }

        return (
            <Box mb={5}>
                <Text textStyle="h1" as={'h2'}>
                    {props.component.title}
                </Text>
            </Box>
        )
    }

    function renderDescription() {
        if (!props.component.description) {
            return
        }

        return (
            <Grid
                mb={5}
                templateColumns={{
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }}
                gap={5}
            >
                <GridItem maxWidth={'55rem'} colSpan={2} paddingRight={31.5} paddingBottom={5}>
                    <Markdown>{props.component.description}</Markdown>
                </GridItem>
                {props.component.featuredFields && (
                    <GridItem mb={5}>
                        <Grid gap={6}>
                            {props.component.featuredFields.map(field => (
                                <GridItem key={field.id}>
                                    <Text textStyle="h5" as={'h5'} mb={1}>
                                        {field.value}
                                    </Text>
                                    <Text textStyle={'p'} as={'p'} fontSize={'small'}>
                                        {field.label}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </GridItem>
                )}
            </Grid>
        )
    }

    function renderFields() {
        if (!props.component.fields) {
            return
        }

        return (
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={5}>
                {take(props.component.fields, showAmount).map(field => renderField(field))}
            </Grid>
        )
    }

    function renderField(field: ComponentCoreGridItem) {
        if (props.component.fieldTypes === EnumComponentfieldTypes.Stories) {
            return renderStory(field)
        }

        return renderTriplyRecord(field)
    }

    function renderStory(field: ComponentCoreGridItem) {
        // this should prioritize the thumbnail that is uploaded and fall back on a story's thumbnail
        // I could not find an image url on the story type
        // TODO: fallback on story image thumbnail
        const thumbnailUrl = field.thumbnail?.data?.attributes?.url
        const thumbnailAlt = field.thumbnail?.data?.attributes?.alternativeText || field.title || 'image'

        return (
            <NextLink key={field.id} href={`/story/${field.story?.data?.id}}`}>
                <GridItem w={'100%'} mb={10} cursor={'pointer'}>
                    <Image mb={5} w={'100%'} src={thumbnailUrl || 'broken'} alt={thumbnailAlt} />
                    {renderFieldTitles(field)}
                </GridItem>
            </NextLink>
        )
    }

    function renderTriplyRecord(field: ComponentCoreGridItem) {
        // TODO: fallback on triply record image thumbnail
        const thumbnailUrl =
            field.thumbnail?.data?.attributes?.url || field.triplyRecord?.data?.attributes?.object?.image
        const thumbnailAlt =
            field.thumbnail?.data?.attributes?.alternativeText ||
            field.triplyRecord?.data?.attributes?.object?.title ||
            field.title ||
            'image'

        return (
            <NextLink key={field.id} href={`/record/${field.triplyRecord?.data?.id}}`}>
                <GridItem w={'100%'} mb={10} cursor={'pointer'}>
                    <Image mb={5} w={'100%'} src={thumbnailUrl || 'broken'} alt={thumbnailAlt} />
                    {renderFieldTitles(field)}
                </GridItem>
            </NextLink>
        )
    }

    function renderFieldTitles(field: ComponentCoreGridItem) {
        if (props.component.fieldTitlesAreInverted) {
            return (
                <>
                    <Text textStyle={'p'} as={'p'} fontSize={'small'} mb={1}>
                        {field.subtitle}
                    </Text>
                    <Text textStyle="h4" as={'h4'}>
                        {field.title}
                    </Text>
                </>
            )
        }

        return (
            <>
                <Text textStyle="h4" as={'h4'} mb={1}>
                    {field.title}
                </Text>
                <Text textStyle={'p'} as={'p'} fontSize={'small'}>
                    {field.subtitle}
                </Text>
            </>
        )
    }

    function renderButtons() {
        if (!props.component.buttons) {
            return
        }

        return (
            <ButtonsGrid
                renderBefore={() =>
                    !allFieldsAreShown && (
                        <Button onClick={() => setShowAmount(showAmount + pageSize)}>
                            {props.component.loadMoreButtonTitle}
                        </Button>
                    )
                }
                buttons={props.component.buttons ?? []}
                flexDirection={undefined}
            />
        )
    }
}
