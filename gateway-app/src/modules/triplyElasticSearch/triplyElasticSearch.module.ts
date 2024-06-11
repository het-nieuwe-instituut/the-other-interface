import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TriplyElasticSearchService } from './triplyElasticSearch.service'
import { TriplyElasticSearchResolver } from './triplyElasticSearch.resolver'

@Module({
  imports: [HttpModule],
  providers: [TriplyElasticSearchService, TriplyElasticSearchResolver],
})
export class TriplyElasticSearchModule {}
