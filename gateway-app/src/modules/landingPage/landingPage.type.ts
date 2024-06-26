import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { ComponentModulesGridModule } from '../strapi/components/modules/gridModule'
import { ComponentModulesCarousel } from '../strapi/components/modules/carousel'
import { ComponentModulesHighlight } from '../strapi/components/modules/highlight'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'

@ObjectType()
class BaseLandingPage {
  @Field()
  public title: string

  @Field({ nullable: true })
  public text?: string

  @Field(() => ComponentModulesCarousel, { nullable: true })
  public carousel?: ComponentModulesCarousel

  @Field(() => ComponentModulesGridModule, { nullable: true })
  public grid?: ComponentModulesGridModule

  @Field(() => ComponentModulesHighlight, { nullable: true })
  public highlight?: ComponentModulesHighlight

  @Field(() => ComponentModulesImageCarousel, { nullable: true })
  public imageCarousel?: ComponentModulesImageCarousel
}

@ObjectType()
class LandingPageArchive extends BaseLandingPage {}

@ObjectType()
class LandingPageObject extends BaseLandingPage {}

@ObjectType()
class LandingPagePeople extends BaseLandingPage {}

@ObjectType()
class LandingPagePublication extends BaseLandingPage {}

@ObjectType()
class LandingPageArchiveEntity {
  @Field(() => LandingPageArchive, { nullable: true })
  public attributes?: LandingPageArchive

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class LandingPageArchiveEntityResponse {
  @Field(() => LandingPageArchiveEntity, { nullable: true })
  public data?: LandingPageArchiveEntity
}

@ObjectType()
class LandingPageObjectEntity {
  @Field(() => LandingPageObject, { nullable: true })
  public attributes?: LandingPageObject

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class LandingPageObjectEntityResponse {
  @Field(() => LandingPageObjectEntity, { nullable: true })
  public data?: LandingPageObjectEntity
}

@ObjectType()
class LandingPagePeopleEntity {
  @Field(() => LandingPagePeople, { nullable: true })
  public attributes?: LandingPagePeople

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class LandingPagePeopleEntityResponse {
  @Field(() => LandingPagePeopleEntity, { nullable: true })
  public data?: LandingPagePeopleEntity
}

@ObjectType()
class LandingPagePublicationEntity {
  @Field(() => LandingPagePublication, { nullable: true })
  public attributes?: LandingPagePublication

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class LandingPagePublicationEntityResponse {
  @Field(() => LandingPagePublicationEntity, { nullable: true })
  public data?: LandingPagePublicationEntity
}

@InputType()
export class QueryLandingpageArgs {
  @Field(() => ID, { nullable: true })
  public id?: string

  @Field({ nullable: true })
  public locale?: string
}
