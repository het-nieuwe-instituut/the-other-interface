import DataLoader from 'dataloader'
import { AuthorEntityResponse } from 'src/modules/author/author.type'
import { LocationEntity } from 'src/modules/location/location.type'
import { StoryComponentsDynamicZone, StoryEntity } from 'src/modules/story/story.type'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'
import { ComponentCorePublicationDate } from 'src/modules/strapi/components/core/publicationDate'
import { ComponentCoreTimeframe } from 'src/modules/strapi/components/core/timeframe'
import { ComponentModulesButtonsModule } from 'src/modules/strapi/components/modules/buttonsModule'
import { ThemeEntity } from 'src/modules/theme/theme.type'
import { TriplyRecordEntity } from 'src/modules/triplyRecord/triplyRecord.type'

export interface IDataloaders {
  storyAuthor: DataLoader<string, AuthorEntityResponse | null>
  storyLocations: DataLoader<string, LocationEntity[]>
  storyThemes: DataLoader<string, ThemeEntity[]>
  storyParentStory: DataLoader<string, StoryEntityResponse | null>
  storyChildStories: DataLoader<string, StoryEntity[]>
  storySiblings: DataLoader<string, StoryEntity[]>
  // eslint-disable-next-line prettier/prettier
  storyComponents: DataLoader<string, (typeof StoryComponentsDynamicZone)[]>
  storyLocalizations: DataLoader<string, StoryEntity[]>
  storyTriplyRecords: DataLoader<string, TriplyRecordEntity[]>
  storyStoryLinks: DataLoader<string, ComponentModulesButtonsModule | null>
  storyTimeframe: DataLoader<string, ComponentCoreTimeframe | null>
  storyPublicationDate: DataLoader<string, ComponentCorePublicationDate | null>
}
