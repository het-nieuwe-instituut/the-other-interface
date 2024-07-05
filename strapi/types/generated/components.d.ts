import type { Schema, Attribute } from '@strapi/strapi'

export interface CoreButton extends Schema.Component {
  collectionName: 'components_core_buttons'
  info: {
    displayName: 'Button'
    description: ''
  }
  attributes: {
    text: Attribute.String & Attribute.Required
    url: Attribute.String & Attribute.Required
  }
}

export interface CoreCarouselImage extends Schema.Component {
  collectionName: 'components_core_carousel_images'
  info: {
    displayName: 'Carousel image'
    description: ''
  }
  attributes: {
    image: Attribute.Media & Attribute.Required
    alt_text: Attribute.String
    title: Attribute.String & Attribute.Required
    description: Attribute.String & Attribute.DefaultTo<'description'>
    story: Attribute.Relation<'core.carousel-image', 'oneToOne', 'api::story.story'>
    triply_record: Attribute.Relation<
      'core.carousel-image',
      'oneToOne',
      'api::triply-record.triply-record'
    >
  }
}

export interface CoreFeaturedFields extends Schema.Component {
  collectionName: 'components_core_featured_fields'
  info: {
    displayName: 'featured fields'
    description: ''
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    value: Attribute.String & Attribute.Required
  }
}

export interface CoreGridFeaturedFields extends Schema.Component {
  collectionName: 'components_core_grid_featured_fields'
  info: {
    displayName: 'Grid featured fields'
    description: ''
  }
  attributes: {
    story: Attribute.Relation<'core.grid-featured-fields', 'oneToOne', 'api::story.story'>
    thumbnail: Attribute.Media
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.String & Attribute.Required
    triplyRecord: Attribute.Relation<
      'core.grid-featured-fields',
      'oneToOne',
      'api::triply-record.triply-record'
    >
  }
}

export interface CoreImageCarouselItem extends Schema.Component {
  collectionName: 'components_core_image_carousel_items'
  info: {
    displayName: 'Image carousel item'
  }
  attributes: {
    image: Attribute.Media & Attribute.Required
    alt_text: Attribute.String & Attribute.Required
    story: Attribute.Relation<'core.image-carousel-item', 'oneToOne', 'api::story.story'>
    triply_record: Attribute.Relation<
      'core.image-carousel-item',
      'oneToOne',
      'api::triply-record.triply-record'
    >
    url: Attribute.String
  }
}

export interface CoreMuxAudio extends Schema.Component {
  collectionName: 'components_core_mux_audios'
  info: {
    displayName: 'MuxAudio'
    icon: 'headphone'
  }
  attributes: {
    caption: Attribute.String
    muxAudioRelation: Attribute.Relation<
      'core.mux-audio',
      'oneToOne',
      'plugin::mux-video-uploader.mux-asset'
    >
  }
}

export interface CoreMuxVideo extends Schema.Component {
  collectionName: 'components_core_mux_videos'
  info: {
    displayName: 'MuxVideo'
    icon: 'television'
    description: ''
  }
  attributes: {
    caption: Attribute.String
    muxVideoRelation: Attribute.Relation<
      'core.mux-video',
      'oneToOne',
      'plugin::mux-video-uploader.mux-asset'
    >
  }
}

export interface CorePublicationDate extends Schema.Component {
  collectionName: 'components_core_publication_dates'
  info: {
    displayName: 'Publication date'
    description: ''
  }
  attributes: {
    date: Attribute.Date
    displayType: Attribute.Enumeration<['Year', 'Date']> & Attribute.DefaultTo<'Year'>
  }
}

export interface CoreStandAloneLink extends Schema.Component {
  collectionName: 'components_core_stand_alone_links'
  info: {
    displayName: 'Stand alone link'
  }
  attributes: {
    label: Attribute.String & Attribute.Required
    url: Attribute.String
    attachment: Attribute.Media
  }
}

export interface CoreTimeframe extends Schema.Component {
  collectionName: 'components_core_timeframes'
  info: {
    displayName: 'timeframe'
    icon: 'calendar-alt'
    description: ''
  }
  attributes: {
    yearStart: Attribute.BigInteger
    yearEnd: Attribute.BigInteger
  }
}

export interface ModulesButtonsModule extends Schema.Component {
  collectionName: 'components_modules_buttons_modules'
  info: {
    displayName: 'Buttons'
    icon: 'compress'
    description: ''
  }
  attributes: {
    buttons: Attribute.Component<'core.button', true>
  }
}

export interface ModulesCarousel extends Schema.Component {
  collectionName: 'components_modules_carousel'
  info: {
    displayName: 'Carousel'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text
    images: Attribute.Component<'core.carousel-image', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1
      }>
    explore_collection_button: Attribute.Component<'core.button'>
    variant: Attribute.Enumeration<['two-up', 'three-up', 'four-up']>
  }
}

export interface ModulesGridModule extends Schema.Component {
  collectionName: 'components_modules_grid_modules'
  info: {
    displayName: 'Grid'
    description: ''
  }
  attributes: {
    title: Attribute.String
    cards: Attribute.Component<'core.grid-featured-fields', true> &
      Attribute.SetMinMax<{
        max: 9
      }>
    exploreCollectionButton: Attribute.Component<'core.button'>
  }
}

export interface ModulesHighlight extends Schema.Component {
  collectionName: 'components_modules_highlights'
  info: {
    displayName: 'Highlight'
    icon: ''
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text
    buttons: Attribute.Component<'core.button', true> &
      Attribute.SetMinMax<{
        max: 2
      }>
    image: Attribute.Media & Attribute.Required
    image_alt_text: Attribute.String & Attribute.Required
  }
}

export interface ModulesImageCarousel extends Schema.Component {
  collectionName: 'components_modules_image_carousels'
  info: {
    displayName: 'Image carousel'
    description: ''
  }
  attributes: {
    images: Attribute.Media
    description: Attribute.Text
    items: Attribute.Component<'core.image-carousel-item', true> & Attribute.Required
  }
}

export interface ModulesImage extends Schema.Component {
  collectionName: 'components_shared_images'
  info: {
    displayName: 'Image'
    description: ''
  }
  attributes: {
    image: Attribute.Media & Attribute.Required
    caption: Attribute.Text
    alt_text: Attribute.String
    triplyRecord: Attribute.Relation<
      'modules.image',
      'oneToOne',
      'api::triply-record.triply-record'
    >
    story: Attribute.Relation<'modules.image', 'oneToOne', 'api::story.story'>
  }
}

export interface ModulesPullquote extends Schema.Component {
  collectionName: 'components_modules_pullquotes'
  info: {
    displayName: 'Pullquote'
    icon: 'align-left'
    description: ''
  }
  attributes: {
    text: Attribute.Text
  }
}

export interface ModulesSideImageWithText extends Schema.Component {
  collectionName: 'components_modules_side_image_with_texts'
  info: {
    displayName: 'Side Image with Text'
    description: ''
  }
  attributes: {
    sideText: Attribute.RichText & Attribute.Required
    image: Attribute.Media & Attribute.Required
    image_alt_text: Attribute.String & Attribute.Required
  }
}

export interface ModulesStandaloneLinks extends Schema.Component {
  collectionName: 'components_modules_standalone_links'
  info: {
    displayName: 'Standalone Links'
    icon: 'cursor'
    description: ''
  }
  attributes: {
    standaloneLinks: Attribute.Component<'core.stand-alone-link', true>
  }
}

export interface ModulesSubtitle extends Schema.Component {
  collectionName: 'components_modules_subtitles'
  info: {
    displayName: 'Subtitle'
    icon: 'grip-lines'
    description: ''
  }
  attributes: {
    text: Attribute.Text
  }
}

export interface ModulesTextModule extends Schema.Component {
  collectionName: 'components_modules_text_modules'
  info: {
    displayName: 'Text'
    icon: 'align-left'
    description: ''
  }
  attributes: {
    Richtext: Attribute.RichText
  }
}

export interface ModulesTitleModule extends Schema.Component {
  collectionName: 'components_modules_title_modules'
  info: {
    displayName: 'Title'
    icon: 'ad'
    description: ''
  }
  attributes: {
    Title: Attribute.String
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'core.button': CoreButton
      'core.carousel-image': CoreCarouselImage
      'core.featured-fields': CoreFeaturedFields
      'core.grid-featured-fields': CoreGridFeaturedFields
      'core.image-carousel-item': CoreImageCarouselItem
      'core.mux-audio': CoreMuxAudio
      'core.mux-video': CoreMuxVideo
      'core.publication-date': CorePublicationDate
      'core.stand-alone-link': CoreStandAloneLink
      'core.timeframe': CoreTimeframe
      'modules.buttons-module': ModulesButtonsModule
      'modules.carousel': ModulesCarousel
      'modules.grid-module': ModulesGridModule
      'modules.highlight': ModulesHighlight
      'modules.image-carousel': ModulesImageCarousel
      'modules.image': ModulesImage
      'modules.pullquote': ModulesPullquote
      'modules.side-image-with-text': ModulesSideImageWithText
      'modules.standalone-links': ModulesStandaloneLinks
      'modules.subtitle': ModulesSubtitle
      'modules.text-module': ModulesTextModule
      'modules.title-module': ModulesTitleModule
    }
  }
}
