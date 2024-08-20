import DataLoader from 'dataloader'
import { AuthorEntityResponse } from 'src/modules/author/author.type'
import { LocationRelationResponseCollection } from 'src/modules/location/location.type'
import {
  StoryComponentsDynamicZone,
  StoryEntity,
  StoryRelationResponseCollection,
} from 'src/modules/story/story.type'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'
import { ComponentCorePublicationDate } from 'src/modules/strapi/components/core/publicationDate'
import { ComponentCoreTimeframe } from 'src/modules/strapi/components/core/timeframe'
import { ComponentModulesButtonsModule } from 'src/modules/strapi/components/modules/buttonsModule'
import { ThemeRelationResponseCollection } from 'src/modules/theme/theme.type'
import { TriplyRecordRelationResponseCollection } from 'src/modules/triplyRecord/triplyRecord.type'

export interface IDataloaders {
  storyAuthor: DataLoader<string, AuthorEntityResponse>
  storyLocations: DataLoader<string, LocationRelationResponseCollection>
  storyThemes: DataLoader<string, ThemeRelationResponseCollection>
  storyParentStory: DataLoader<string, StoryEntityResponse>
  storyChildStories: DataLoader<string, StoryRelationResponseCollection>
  storySiblings: DataLoader<string, StoryEntity[]>
  // eslint-disable-next-line prettier/prettier
  storyComponents: DataLoader<string, (typeof StoryComponentsDynamicZone)[]>
  storyLocalizations: DataLoader<string, StoryRelationResponseCollection>
  storyTriplyRecords: DataLoader<string, TriplyRecordRelationResponseCollection>
  storyStoryLinks: DataLoader<string, ComponentModulesButtonsModule>
  storyTimeframe: DataLoader<string, ComponentCoreTimeframe>
  storyPublicationDate: DataLoader<string, ComponentCorePublicationDate>
}
