import type { Schema, Attribute } from '@strapi/strapi'

export interface CoreButton extends Schema.Component {
  collectionName: 'components_core_buttons'
  info: {
    displayName: 'Button'
    description: ''
  }
  attributes: {
    text: Attribute.String
    url: Attribute.String
  }
}

export interface CoreCarouselItem extends Schema.Component {
  collectionName: 'components_core_carousel_items'
  info: {
    displayName: 'CarouselItem'
    description: ''
  }
  attributes: {
    picture: Attribute.Media
    name: Attribute.String
    description: Attribute.Text
    type: Attribute.Enumeration<['Maker', 'Highlight']>
    triply_record: Attribute.Relation<
      'core.carousel-item',
      'oneToOne',
      'api::triply-record.triply-record'
    >
    story: Attribute.Relation<'core.carousel-item', 'oneToOne', 'api::story.story'>
  }
}

export interface CoreFeaturedFields extends Schema.Component {
  collectionName: 'components_core_featured_fields'
  info: {
    displayName: 'featuredFields'
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
    displayName: 'gridFeaturedFields'
    description: ''
  }
  attributes: {
    story: Attribute.Relation<'core.grid-featured-fields', 'oneToOne', 'api::story.story'>
    thumbnail: Attribute.Media
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.String
    triplyRecord: Attribute.Relation<
      'core.grid-featured-fields',
      'oneToOne',
      'api::triply-record.triply-record'
    >
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

export interface CorePublicationDate extends Schema.Component {
  collectionName: 'components_core_publication_dates'
  info: {
    displayName: 'Publication Date'
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
    displayName: 'Buttons module'
    icon: 'compress'
    description: ''
  }
  attributes: {
    buttons: Attribute.Component<'core.button', true>
  }
}

export interface ModulesCarousel extends Schema.Component {
  collectionName: 'components_modules_carousels'
  info: {
    displayName: 'Carousel module'
    description: ''
  }
  attributes: {
    items: Attribute.Component<'core.carousel-item', true>
    title: Attribute.String
    buttonText: Attribute.String
    buttonUrl: Attribute.Text
    type: Attribute.Enumeration<['Makers', 'Highlights', 'Combined', 'Themes']>
    description: Attribute.Text
  }
}

export interface ModulesGridModule extends Schema.Component {
  collectionName: 'components_modules_grid_modules'
  info: {
    displayName: 'Grid module'
    description: ''
  }
  attributes: {
    title: Attribute.String
    description: Attribute.Text
    featuredFields: Attribute.Component<'core.featured-fields', true>
    fieldTypes: Attribute.Enumeration<['Triply', 'Stories']> &
      Attribute.Required &
      Attribute.DefaultTo<'Stories'>
    fieldTitlesAreInverted: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    fields: Attribute.Component<'core.grid-featured-fields', true>
    buttons: Attribute.Component<'core.button', true>
    showMoreButtonTitle: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Show More'>
    pageSize: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<6>
  }
}

export interface ModulesImageCarousel extends Schema.Component {
  collectionName: 'components_modules_image_carousels'
  info: {
    displayName: 'Image carousel module'
    description: ''
  }
  attributes: {
    images: Attribute.Media
    description: Attribute.Text
  }
}

export interface ModulesImage extends Schema.Component {
  collectionName: 'components_shared_images'
  info: {
    displayName: 'Image module'
    description: ''
  }
  attributes: {
    image: Attribute.Media & Attribute.Required
    caption: Attribute.Text
    alt_text: Attribute.String & Attribute.Required
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
    displayName: 'Pullquote module'
    icon: 'align-left'
    description: ''
  }
  attributes: {
    text: Attribute.Text
  }
}

export interface ModulesSubtitle extends Schema.Component {
  collectionName: 'components_modules_subtitles'
  info: {
    displayName: 'Subtitle module'
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
    displayName: 'Text module'
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
    displayName: 'Title module'
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
      'core.carousel-item': CoreCarouselItem
      'core.featured-fields': CoreFeaturedFields
      'core.grid-featured-fields': CoreGridFeaturedFields
      'core.mux-audio': CoreMuxAudio
      'core.publication-date': CorePublicationDate
      'core.stand-alone-link': CoreStandAloneLink
      'core.timeframe': CoreTimeframe
      'modules.buttons-module': ModulesButtonsModule
      'modules.carousel': ModulesCarousel
      'modules.grid-module': ModulesGridModule
      'modules.image-carousel': ModulesImageCarousel
      'modules.image': ModulesImage
      'modules.pullquote': ModulesPullquote
      'modules.subtitle': ModulesSubtitle
      'modules.text-module': ModulesTextModule
      'modules.title-module': ModulesTitleModule
    }
  }
}
