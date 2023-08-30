import { storiesWithRelationsData } from './storiesWithRelationsData'

export const themesData = {
  themes: {
    data: [
      {
        id: '3',
        attributes: {
          name: 'Aanwinsten',
          stories: storiesWithRelationsData.stories,
          createdAt: '2023-08-29T09:15:02.167Z',
          updatedAt: '2023-08-29T13:39:14.222Z',
          publishedAt: '2023-08-29T09:15:16.012Z',
          localizations: {
            data: [],
          },
          locale: 'nl',
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 1,
        pageCount: 1,
        total: 1,
      },
    },
  },
}
