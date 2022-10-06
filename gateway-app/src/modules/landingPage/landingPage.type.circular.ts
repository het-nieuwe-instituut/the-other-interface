import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { DateTimeFilterInput, IdFilterInput, StringFilterInput } from '../strapi/shared-types'
import { LandingpageEntity } from './landingPage.type'

@InputType()
export class LandingpageFiltersInput {
    @Field(() => StringFilterInput, { nullable: true })
    public Title?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public Description?: StringFilterInput

    @Field(() => [LandingpageFiltersInput], { nullable: true })
    public and?: LandingpageFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public locale?: StringFilterInput

    @Field(() => LandingpageFiltersInput, { nullable: true })
    public localizations?: LandingpageFiltersInput

    @Field(() => LandingpageFiltersInput, { nullable: true })
    public not?: LandingpageFiltersInput

    @Field(() => [LandingpageFiltersInput], { nullable: true })
    public or?: LandingpageFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public slug?: StringFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}

@ObjectType()
export class LandingpageRelationResponseCollection {
    @Field(() => [LandingpageEntity])
    public data: LandingpageEntity[]
}
