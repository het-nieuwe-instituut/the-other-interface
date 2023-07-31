export const HomePageData = {
  homepage: {
    __typename: 'HomepageEntityResponse',
    data: {
      __typename: 'HomepageEntity',
      id: '2',
      attributes: {
        __typename: 'Homepage',
        Title: 'Home Page',
        description: 'This is a description of the homepage test',
        components: [
          {
            id: '13',
            __typename: 'ComponentModulesTextModule',
            Richtext:
              'The Other Interface is hét platform van Het Nieuwe Instituut om de Rijkscollectie voor Nederlandse Architectuur en Stedenbouw online te ontdekken. Zoek in de collectie en lees de verhalen.   ',
            textModuleLayout: { id: '1', spacingTop: 'Md', spacingBottom: 'Md' },
          },
          {
            id: '4',
            __typename: 'ComponentModulesTitleModule',
            Title: 'Over de Rijkscollectie',
            titleModuleLayout: { id: '2', spacingTop: 'Md', spacingBottom: 'Md' },
          },
          {
            id: '12',
            __typename: 'ComponentModulesTextModule',
            Richtext:
              'Het Nieuwe Instituut beheert de Rijkscollectie voor Nederlandse Architectuur en Stedenbouw, met tekeningen, correpondentie foto’s, affiches en maquettes uit de archieven en verzamelingen van Nederlandse architecten en stedenbouwers. Daarnaast is er een internationaal georiënteerde bibliotheek met boeken en tijdschriften over architectuur, stedenbouw, ruimtelijke ordening, interieur, kunst, design en digitale cultuur.    ',
            textModuleLayout: { id: '3', spacingTop: 'Md', spacingBottom: 'Md' },
          },
          {
            id: '2',
            __typename: 'ComponentModulesImageCarousel',
            images: {
              data: [
                {
                  id: '1',
                  __typename: 'Image',
                  attributes: {
                    url: 'https://picsum.photos/500',
                    caption: 'https://picsum.photos/500',
                    width: 500,
                    height: 500,
                    size: 40,
                  },
                },
                {
                  id: '2',
                  __typename: 'Image',
                  attributes: {
                    url: 'https://picsum.photos/500',
                    caption: 'https://picsum.photos/500',
                    width: 500,
                    height: 500,
                    size: 40,
                  },
                },
                {
                  id: '3',
                  __typename: 'Image',
                  attributes: {
                    url: 'https://picsum.photos/500',
                    caption: 'https://picsum.photos/500',
                    width: 500,
                    height: 500,
                    size: 40,
                  },
                },
                {
                  id: '4',
                  __typename: 'Image',
                  attributes: {
                    url: 'https://picsum.photos/500',
                    caption: 'https://picsum.photos/500',
                    width: 500,
                    height: 500,
                    size: 40,
                  },
                },
              ],
            },
            description: null,
            imageCarouselModuleLayout: { id: '4', spacingTop: 'Md', spacingBottom: 'Md' },
          },
          {
            __typename: 'ComponentModulesGridModule',
            buttons: [],
            description: null,
            featuredFields: [{ id: '1', label: "Editor's pick", value: 'Keuze van de redactie' }],
            fields: [
              {
                id: '2',
                __typename: 'Field',
                title: 'Geschiedenis van de collectie',
                subtitle:
                  'De collectie van Het Nieuwe Instituut is veel ouder dan het instituut zelf. Al vanaf het einde van de negentiende eeuw werden architectuurtekeningen van vooraanstaande architecten verzameld.',
                thumbnail: {
                  data: {
                    id: '1',
                    __typename: 'Image',
                    attributes: {
                      url: 'https://picsum.photos/500',
                      alternativeText: 'some-image.png',
                    },
                  },
                },
                story: {
                  data: {
                    id: '15',
                    __typename: 'Story',
                    attributes: { attributes: { slug: 'entry15', author: null, updatedAt: null } },
                  },
                },
                triplyRecord: [],
              },
              {
                id: '3',
                __typename: 'Field',
                title: 'Rijkscollectie voor Nederlandse Architectuur en Stedenbouw',
                subtitle:
                  'Het Nieuwe Instituut ontleent zijn bijzondere positie in belangrijke mate aan de omvang en vooral de unieke betekenis van de Rijkscollectie voor Architectuur en Stedenbouw die het beheert.',
                thumbnail: {
                  data: {
                    id: '2',
                    __typename: 'Image',
                    attributes: {
                      url: 'https://picsum.photos/500',
                      alternativeText: 'some-image.png',
                    },
                  },
                },
                story: {
                  data: {
                    id: '16',
                    __typename: 'Story',
                    attributes: { attributes: { slug: 'entry16', author: null, updatedAt: null } },
                  },
                },
                triplyRecord: [],
              },
              {
                id: '1',
                __typename: 'Field',
                title: 'Archief Theo van Doesburg',
                subtitle:
                  'In 2019 is de restauratie en conservering van de collectie van architect en kunstenaar Theo van Doesburg (1883-1931) van start gegaan, een collectie van grote cultuurhistorische betekenis.',
                thumbnail: {
                  data: {
                    id: '2',
                    __typename: 'Image',
                    attributes: {
                      url: 'https://picsum.photos/500',
                      alternativeText: 'some-image.png',
                    },
                  },
                },
                story: {
                  data: {
                    id: '16',
                    __typename: 'Story',
                    attributes: { attributes: { slug: 'entry16', author: null, updatedAt: null } },
                  },
                },
                triplyRecord: [],
              },
            ],
            fieldTitlesAreInverted: false,
            fieldTypes: 'Stories',
            gridModuleLayout: { id: '51', spacingTop: 'Md', spacingBottom: 'Md' },
            id: '1',
            pageSize: 6,
            showMoreButtonTitle: 'Show More',
            title: 'Uitgelichte verhalen',
          },
        ],
      },
    },
  },
}
