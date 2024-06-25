import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PublicationState } from '../../generated/strapi-sdk'
import { ComponentModulesGridModule } from '../strapi/components/modules/gridModule'
import { ResponseCollectionMeta } from '../strapi/shared-types'
import { ThemeRelationResponseCollection } from '../theme/theme.type'
import { ComponentModulesCarousel } from '../strapi/components/modules/carousel'

@ObjectType()
export class HomepageRelationResponseCollection {
  @Field(() => [HomepageEntity])
  public data: HomepageEntity[]
}

@ObjectType()
export class Homepage {
  @Field()
  public Title: string

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public publishedAt?: Date

  @Field({ nullable: true })
  public updatedAt?: Date

  @Field()
  public text: string

  @Field(() => ComponentModulesCarousel, { nullable: true })
  public carousel?: ComponentModulesCarousel

  @Field(() => ComponentModulesGridModule, { nullable: true })
  public grid?: ComponentModulesGridModule
}

@ObjectType()
export class HighlightedHomepageThemes {
  @Field(() => ThemeRelationResponseCollection, { nullable: true })
  public highlightedThemes?: ThemeRelationResponseCollection
}

@ObjectType()
export class HighlightedHomepageThemeEntity {
  @Field(() => HighlightedHomepageThemes, { nullable: true })
  public attributes?: HighlightedHomepageThemes

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class HighlightedHomepageThemeEntityResponse {
  @Field(() => HighlightedHomepageThemeEntity)
  public data: HighlightedHomepageThemeEntity

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta?: ResponseCollectionMeta
}

@ObjectType()
export class HomepageEntity {
  @Field(() => Homepage, { nullable: true })
  public attributes?: Homepage

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class HomepageEntityResponse {
  @Field(() => HomepageEntity)
  public data: HomepageEntity
}

@InputType()
export class HomepageLocalizationsArgs {
  @Field(() => PublicationState, { nullable: true })
  public publicationState?: PublicationState
}

@InputType()
export class QueryHomepageArgs {
  @Field({ nullable: true })
  public locale?: string

  @Field(() => PublicationState, { nullable: true })
  public publicationState?: PublicationState
}
