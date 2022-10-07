import { Field, ObjectType } from '@nestjs/graphql'
import { MenupageEntity } from './menuPage.type'

@ObjectType()
export class MenupageRelationResponseCollection {
    @Field(() => [MenupageEntity], { nullable: true })
    public data: MenupageEntity[]
}
