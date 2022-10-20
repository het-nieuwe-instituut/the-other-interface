/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import { getLayout } from '@/features/shared/utils/correctSpacing'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { take } from 'lodash'
import { useState } from 'react'
import { ComponentCoreGridItem, ComponentModulesGridModule } from '../../../../mocks/grid/mockGrid'

interface Props {
    component: ComponentModulesGridModule
}

export const GridModule: React.FC<Props> = props => {
    const pageSize = props.component.pageSize || 6
    const [showAmount, setShowAmount] = useState(pageSize)
    const allFieldsAreShown = showAmount === props.component.fields?.length
    const layout = getLayout(props.component.gridModuleLayout)

    return (
        <Box
            width="100%"
            px={6}
            backgroundColor={'white'}
            paddingBottom={layout.spacingBottom}
            paddingTop={layout.spacingTop}
        >
            {props.component.title && (
                <Box mb={'md'}>
                    <Text textStyle="h1" as={'h2'}>
                        {props.component.title}
                    </Text>
                </Box>
            )}
            {props.component.description && (
                <Grid mb={'md'} templateColumns="repeat(3, 1fr)" gap={'md'}>
                    <GridItem maxWidth={'55rem'} colSpan={2} paddingRight={'2xl'}>
                        <Markdown>{props.component.description}</Markdown>
                    </GridItem>
                    {props.component.featuredFields && (
                        <GridItem mb={'md'}>
                            <Grid gap={'md'}>
                                {props.component.featuredFields.map(field => (
                                    <GridItem key={field.id}>
                                        <Text textStyle="h5" as={'h5'}>
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
            )}
            {props.component.fields && (
                <Grid mb={'md'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={'md'}>
                    {take(props.component.fields, showAmount).map(field => (
                        <GridItem key={field.id} w={'100%'}>
                            <Image
                                mb={'md'}
                                w={'100%'}
                                src={field.thumbnail?.data?.attributes?.url}
                                alt="Dan Abramov"
                            />
                            {renderFieldTitles(field)}
                        </GridItem>
                    ))}
                </Grid>
            )}

            {props.component.buttons && (
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
            )}
        </Box>
    )

    function renderFieldTitles(field: ComponentCoreGridItem) {
        if (props.component.fieldTitlesAreInverted) {
            return (
                <>
                    <Text textStyle={'p'} as={'p'} fontSize={'small'} mb={'md'}>
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
                <Text textStyle="h4" as={'h4'} mb={'md'}>
                    {field.title}
                </Text>
                <Text textStyle={'p'} as={'p'} fontSize={'small'}>
                    {field.subtitle}
                </Text>
            </>
        )
    }
}
