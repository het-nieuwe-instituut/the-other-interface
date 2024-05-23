import {
  ComponentModulesGridModule,
  ComponentModulesImage,
  ComponentModulesImageCarousel,
  ComponentModulesTextModule,
  ComponentModulesTitleModule,
  EnumComponentmodulesgridmoduleFieldtypes,
} from 'src/generated/graphql'

const uploadImageMock = {
  url: 'https://picsum.photos/500',
  alternativeText: 'some-image.png',
  hash: 'some-hash',
  mime: 'image/png',
  size: 500,
  name: 'some-image.png',
  provider: 'local',
}

const linkedStoryMock = {
  title: 'some title',
  slug: 'entry16',
  author: null,
  updatedAt: null,
}

export const imageModuleMock: ComponentModulesImage = {
  id: '385',
  __typename: 'ComponentModulesImage',
  image: {
    data: {
      attributes: uploadImageMock,
    },
  },
  caption:
    'Queering the Collections aims to increase the awareness of queer heritage and histories in The Netherlands',
  alt_text: null,
}

const textModuleMock: ComponentModulesTextModule = {
  id: '13',
  __typename: 'ComponentModulesTextModule',
  Richtext:
    'The Other Interface is hét platform van Het Nieuwe Instituut om de Rijkscollectie voor Nederlandse Architectuur en Stedenbouw online te ontdekken. Zoek in de collectie en lees de verhalen.   ',
}

const titleModuleMock: ComponentModulesTitleModule = {
  id: '3',
  __typename: 'ComponentModulesTitleModule',
  Title: 'Over de Rijkscollectie',
}

const imageCarouselModuleMock: ComponentModulesImageCarousel = {
  id: '2',
  __typename: 'ComponentModulesImageCarousel',
  images: {
    data: [
      {
        id: '1',
        __typename: 'UploadFileEntity',
        attributes: uploadImageMock,
      },
      {
        id: '2',
        __typename: 'UploadFileEntity',
        attributes: uploadImageMock,
      },
      {
        id: '3',
        __typename: 'UploadFileEntity',
        attributes: uploadImageMock,
      },
      {
        id: '4',
        __typename: 'UploadFileEntity',
        attributes: uploadImageMock,
      },
    ],
  },
  description: null,
}

const gridCompomentMock: ComponentModulesGridModule = {
  __typename: 'ComponentModulesGridModule',
  description: null,
  featuredFields: [{ id: '1', label: "Editor's pick", value: 'Keuze van de redactie' }],
  fields: [
    {
      id: '2',
      __typename: 'ComponentCoreGridFeaturedFields',
      title: 'Geschiedenis van de collectie',
      subtitle:
        'De collectie van Het Nieuwe Instituut is veel ouder dan het instituut zelf. Al vanaf het einde van de negentiende eeuw werden architectuurtekeningen van vooraanstaande architecten verzameld.',
      thumbnail: {
        data: {
          id: '1',
          __typename: 'UploadFileEntity',
          attributes: uploadImageMock,
        },
      },
      story: {
        data: {
          id: '15',
          __typename: 'StoryEntity',
          attributes: linkedStoryMock,
        },
      },
      triplyRecord: null,
    },
    {
      id: '3',
      __typename: 'ComponentCoreGridFeaturedFields',
      title: 'Rijkscollectie voor Nederlandse Architectuur en Stedenbouw',
      subtitle:
        'Het Nieuwe Instituut ontleent zijn bijzondere positie in belangrijke mate aan de omvang en vooral de unieke betekenis van de Rijkscollectie voor Architectuur en Stedenbouw die het beheert.',
      thumbnail: {
        data: {
          id: '2',
          __typename: 'UploadFileEntity',
          attributes: uploadImageMock,
        },
      },
      story: {
        data: {
          id: '16',
          __typename: 'StoryEntity',
          attributes: linkedStoryMock,
        },
      },
      triplyRecord: null,
    },
    {
      id: '1',
      __typename: 'ComponentCoreGridFeaturedFields',
      title: 'Archief Theo van Doesburg',
      subtitle:
        'In 2019 is de restauratie en conservering van de collectie van architect en kunstenaar Theo van Doesburg (1883-1931) van start gegaan, een collectie van grote cultuurhistorische betekenis.',
      thumbnail: {
        data: {
          id: '2',
          __typename: 'UploadFileEntity',
          attributes: uploadImageMock,
        },
      },
      story: {
        data: {
          id: '16',
          __typename: 'StoryEntity',
          attributes: {
            title: 'some title',
            slug: 'entry16',
            author: null,
            updatedAt: null,
          },
        },
      },
      triplyRecord: null,
    },
  ],
  fieldTitlesAreInverted: false,
  fieldTypes: EnumComponentmodulesgridmoduleFieldtypes.Stories,
  id: '1',
  pageSize: 6,
  showMoreButtonTitle: 'Show More',
  title: 'Uitgelichte verhalen',
}

const editorialLayerComponents = [
  titleModuleMock,
  textModuleMock,
  imageModuleMock,
  imageCarouselModuleMock,
  gridCompomentMock,
]

export default editorialLayerComponents
