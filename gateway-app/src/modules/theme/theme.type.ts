import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  DateTimeFilterInput,
  IdFilterInput,
  ResponseCollectionMeta,
  StringFilterInput,
} from '../strapi/shared-types'
import { Theme } from './theme-dependency.type'

@InputType()
export class ThemeFiltersInput {
  @Field(() => [ThemeFiltersInput], { nullable: true })
  public and?: ThemeFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public createdAt?: DateTimeFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public firstName?: StringFilterInput

  @Field(() => IdFilterInput, { nullable: true })
  public id?: IdFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public insertion?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public lastName?: StringFilterInput

  @Field(() => ThemeFiltersInput, { nullable: true })
  public not?: ThemeFiltersInput

  @Field(() => [ThemeFiltersInput], { nullable: true })
  public or?: ThemeFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public publishedAt?: DateTimeFilterInput

  @Field(() => DateTimeFilterInput, { nullable: true })
  public updatedAt?: DateTimeFilterInput
}

@ObjectType()
export class ThemeEntity {
  @Field(() => Theme, { nullable: true })
  public attributes?: Theme

  @Field(() => ID, { nullable: true })
  public id?: string
}
@ObjectType()
export class ThemeRelationResponseCollection {
  @Field(() => [ThemeEntity], { nullable: true })
  public data?: ThemeEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta?: ResponseCollectionMeta
}

@ObjectType()
export class ThemeEntityResponse {
  @Field(() => ThemeEntity, { nullable: true })
  public data?: ThemeEntity
}

const a = {
  data: {
    storyMetaByLocale: {
      data: {
        id: '3',
        __typename: 'StoryEntity',
        attributes: {
          title: 'Story with description',
          description: null,
          shortDescription: 'Short Descriptionnnnn\n',
          createdAt: '2023-07-21T10:21:34.160Z',
          updatedAt: '2023-11-21T15:29:15.067Z',
          publishedAt: '2023-11-21T15:28:50.407Z',
          author: null,
          publicationDate: {
            id: '3',
            date: null,
            displayType: 'Year',
          },
          locations: {
            data: [
              {
                id: '1',
                attributes: {
                  city: 'Purmerend',
                },
              },
            ],
          },
          timeframe: {
            id: '3',
            yearStart: 2021,
            yearEnd: 2024,
          },
          themes: {
            data: [
              {
                id: '1',
                attributes: {
                  name: 'Dutch Theme Example',
                },
              },
            ],
          },
          triplyRecords: {
            data: [
              {
                id: '17',
                attributes: {
                  recordId: '300184233',
                  type: 'Publication',
                },
              },
              {
                id: '11',
                attributes: {
                  recordId: '1008',
                  type: 'Object',
                },
              },
              {
                id: '9',
                attributes: {
                  recordId: '10185',
                  type: 'People',
                },
              },
              {
                id: '12',
                attributes: {
                  recordId: '10037',
                  type: 'People',
                },
              },
              {
                id: '15',
                attributes: {
                  recordId: '110672433',
                  type: 'Archive',
                },
              },
              {
                id: '6',
                attributes: {
                  recordId: '23765',
                  type: 'People',
                },
              },
              {
                id: '7',
                attributes: {
                  recordId: '14856',
                  type: 'People',
                },
              },
              {
                id: '1',
                attributes: {
                  recordId: '12473',
                  type: 'People',
                },
              },
              {
                id: '13',
                attributes: {
                  recordId: '110000001',
                  type: 'Archive',
                },
              },
              {
                id: '14',
                attributes: {
                  recordId: '110000031',
                  type: 'Archive',
                },
              },
            ],
          },
          storyLinks: {
            id: '2',
            __typename: 'ComponentModulesButtonsModule',
            buttons: [
              {
                id: '2',
                text: 'Instagram',
                url: 'http://123',
                attachment: {
                  data: null,
                },
                hasAttachment: null,
              },
            ],
            buttonStyle: null,
            buttonsModuleLayout: {
              id: '17',
              spacingTop: 'Md',
              spacingBottom: 'Md',
            },
          },
        },
      },
    },
  },
}
