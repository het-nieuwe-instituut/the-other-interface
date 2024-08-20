import { Injectable } from '@nestjs/common'
import DataLoader from 'dataloader'
import { StoryService } from 'src/modules/story/story.service'

import { IDataloaders } from './dataloader.interface'

@Injectable()
export class DataloaderService {
  public constructor(private readonly storyService: StoryService) {}

  public get loaders(): IDataloaders {
    return {
      storyAuthor: new DataLoader(this.storyService.getAuthors),
      storyLocations: new DataLoader(this.storyService.getLocations),
      storyThemes: new DataLoader(this.storyService.getThemes),
      storyParentStory: new DataLoader(this.storyService.getParentStory),
      storyChildStories: new DataLoader(this.storyService.getChildStories),
      storySiblings: new DataLoader(this.storyService.getSiblings),
      storyComponents: new DataLoader(this.storyService.getComponents),
      storyLocalizations: new DataLoader(this.storyService.getLocalizations),
      storyTriplyRecords: new DataLoader(this.storyService.getTriplyRecords),
      storyStoryLinks: new DataLoader(this.storyService.getStoryLinks),
      storyTimeframe: new DataLoader(this.storyService.getTimeframe),
      storyPublicationDate: new DataLoader(this.storyService.getPublicationDate),
    }
  }
}
