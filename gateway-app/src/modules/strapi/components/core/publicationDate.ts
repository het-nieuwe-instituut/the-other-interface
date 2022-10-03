import { ArgsType, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentcorepublicationdate_Displaytype } from '../../../../generated/strapi-sdk'
import { DateFilterInput, StringFilterInput } from '../../shared-types'

registerEnumType(Enum_Componentcorepublicationdate_Displaytype, {
    name: 'Enum_Componentcorepublicationdate_Displaytype',
})

@ObjectType()
export class ComponentCorePublicationDate {
    @Field(() => ID, { nullable: true })
    public id: string

    @Field({ nullable: true })
    public date?: Date

    @Field({ nullable: true })
    public displayType?: Enum_Componentcorepublicationdate_Displaytype
}

@ArgsType()
export class ComponentCorePublicationDateFiltersInput {
    @Field(() => [ComponentCorePublicationDateFiltersInput], { nullable: true })
    public and?: ComponentCorePublicationDateFiltersInput[]

    @Field(() => DateFilterInput, { nullable: true })
    public date?: DateFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public displayType?: StringFilterInput

    @Field(() => ComponentCorePublicationDateFiltersInput, { nullable: true })
    public not?: ComponentCorePublicationDateFiltersInput

    @Field(() => [ComponentCorePublicationDateFiltersInput], { nullable: true })
    public or?: ComponentCorePublicationDateFiltersInput[]
}

@ArgsType()
export class ComponentCorePublicationDateInput {
    @Field({ nullable: true })
    public date?: Date

    @Field(() => Enum_Componentcorepublicationdate_Displaytype, { nullable: true })
    public displayType?: Enum_Componentcorepublicationdate_Displaytype

    @Field(() => ID, { nullable: true })
    public id?: string
}
