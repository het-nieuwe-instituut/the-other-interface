/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { take } from 'lodash'
import NextLink from 'next/link'
import { useState } from 'react'

import {
  ComponentCoreGridFeaturedFields,
  ComponentModulesGridModule,
  EnumComponentmodulesgridmoduleFieldtypes,
} from 'src/generated/graphql'

import { ExtractedTriplyFields, extractTriplyFields } from '../../helpers/triplyDataExtractor'
import { imageBasePath } from '../../modulesConstants'

interface Props {
  component: ComponentModulesGridModule
}

const gridBreakpoints = {
  sm: 'repeat(1, 1fr)',
  md: 'repeat(2, 1fr)',
  lg: 'repeat(3, 1fr)',
}

export const GridModule: React.FC<Props> = props => {
  const pageSize = props.component.pageSize || 6
  const [showAmount, setShowAmount] = useState(pageSize)
  const allFieldsAreShown = showAmount >= (props.component.fields?.length || 0)
  return (
    <Box
      width="100%"
      px={6}
      backgroundColor={'inherit'}
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
      <Grid mb={5} templateColumns={gridBreakpoints} gap={5}>
        <GridItem colSpan={2} paddingRight={31.5} paddingBottom={5}>
          <Markdown>{props.component.description}</Markdown>
        </GridItem>
        {props.component.featuredFields && (
          <GridItem mb={5}>
            <Grid gap={6}>
              {props.component.featuredFields.map((field, index, array) => (
                <GridItem key={keyExtractor(field.id, index, array)}>
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
      <Grid templateColumns={gridBreakpoints} gap={5}>
        {take(props.component.fields, showAmount).map((field, index, array) =>
          renderField(field, index, array)
        )}
      </Grid>
    )
  }

  function renderField(
    field: ComponentCoreGridFeaturedFields,
    index: number,
    array: ComponentCoreGridFeaturedFields[]
  ) {
    if (props.component.fieldTypes === EnumComponentmodulesgridmoduleFieldtypes.Stories) {
      return renderStory(field, index, array)
    }

    return renderTriplyRecord(field, index, array)
  }

  function renderStory(
    field: ComponentCoreGridFeaturedFields,
    index: number,
    array: ComponentCoreGridFeaturedFields[]
  ) {
    // this should prioritize the thumbnail that is uploaded and fall back on a story's thumbnail
    // I could not find an image url on the story type
    // TODO: fallback on story image thumbnail
    const thumbnailUrl = imageBasePath(field.thumbnail?.data?.attributes?.url) || 'broken'
    const thumbnailAlt =
      field.thumbnail?.data?.attributes?.alternativeText || field.title || 'image'

    return (
      <NextLink
        key={keyExtractor(field.id, index, array)}
        href={`/story/${field.story?.data?.id}-${field.story?.data?.attributes?.slug}`}
      >
        <GridItem w={'100%'} mb={10} cursor={'pointer'}>
          <Image mb={5} w={'100%'} src={thumbnailUrl} alt={thumbnailAlt} />
          {renderFieldTitles({
            title: field.title || '',
            description: field.subtitle || '',
          })}
        </GridItem>
      </NextLink>
    )
  }

  function renderTriplyRecord(
    field: ComponentCoreGridFeaturedFields,
    index: number,
    array: ComponentCoreGridFeaturedFields[]
  ) {
    const extractedFields = extractTriplyFields(
      {
        title: field.title || '',
        description: field.subtitle || '',
        imageUrl: field.thumbnail?.data?.attributes?.url || 'broken',
      },
      field.triplyRecord?.data?.attributes
    )

    // TODO: NextLink integration to a page where you can view a triply record
    return (
      <GridItem key={keyExtractor(field.id, index, array)} w={'100%'} mb={10} cursor={'pointer'}>
        <Image mb={5} w={'100%'} src={extractedFields.imageUrl} alt={extractedFields.title} />
        {renderFieldTitles(extractedFields)}
      </GridItem>
    )
  }

  function renderFieldTitles(field: Pick<ExtractedTriplyFields, 'description' | 'title'>) {
    if (props.component.fieldTitlesAreInverted) {
      return (
        <>
          <Text textStyle={'p'} as={'p'} fontSize={'small'} mb={1}>
            {field.description}
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
          {field.description}
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
              {props.component.showMoreButtonTitle}
            </Button>
          )
        }
        buttons={props.component.buttons}
        flexDirection={undefined}
      />
    )
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
  return `${id}-${index}-${array.length}`
}
