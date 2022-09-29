import { ArgsType, Field, Float, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
    Enum_Componentcoremodulelayouts_Spacingbottom,
    Enum_Componentcoremodulelayouts_Spacingtop,
} from 'src/generated/strapi-sdk'

@ObjectType()
export class UploadFileEntityResponse {
    @Field({ nullable: true })
    public __typename?: 'UploadFileEntityResponse'

    @Field({ nullable: true })
    public data?: UploadFileEntity
}

@ObjectType()
export class UploadFileEntity {
    @Field({ nullable: true })
    public __typename?: 'UploadFileEntity'

    @Field(() => UploadFile, { nullable: true })
    public attributes?: UploadFile

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class UploadFile {
    @Field()
    public hash: string

    @Field()
    public mime: string

    @Field()
    public name: string

    @Field()
    public provider: string

    @Field(() => Float)
    public size: number

    @Field()
    public url: string

    @Field({ nullable: true })
    public __typename?: 'UploadFile'

    @Field({ nullable: true })
    public alternativeText?: string

    @Field({ nullable: true })
    public caption?: string

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public ext?: string

    @Field({ nullable: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public formats?: any

    @Field({ nullable: true })
    public height?: number

    @Field({ nullable: true })
    public previewUrl?: string

    @Field({ nullable: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public provider_metadata?: any

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field({ nullable: true })
    public width?: number

    // related?: Maybe<Array<Maybe<GenericMorph>>>
}

@ArgsType()
export class StringFilterInput {
    @Field({ nullable: true })
    public and?: string[]

    @Field({ nullable: true })
    public between?: string[]

    @Field({ nullable: true })
    public contains?: string

    @Field({ nullable: true })
    public containsi?: string

    @Field({ nullable: true })
    public endsWith?: string

    @Field({ nullable: true })
    public eq?: string

    @Field({ nullable: true })
    public eqi?: string

    @Field({ nullable: true })
    public gt?: string

    @Field({ nullable: true })
    public gte?: string

    @Field({ nullable: true })
    public in?: string[]

    @Field({ nullable: true })
    public lt?: string

    @Field({ nullable: true })
    public lte?: string

    @Field({ nullable: true })
    public ne?: string

    @Field(() => StringFilterInput, { nullable: true })
    public not?: StringFilterInput

    @Field({ nullable: true })
    public notContains?: string

    @Field({ nullable: true })
    public notContainsi?: string

    @Field({ nullable: true })
    public notIn?: string[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field({ nullable: true })
    public or?: string[]

    @Field({ nullable: true })
    public startsWith?: string
}

@ArgsType()
export class BooleanFilterInput {
    @Field({ nullable: true })
    public and?: boolean[]

    @Field({ nullable: true })
    public between?: boolean[]

    @Field({ nullable: true })
    public contains?: boolean

    @Field({ nullable: true })
    public containsi?: boolean

    @Field({ nullable: true })
    public endsWith?: boolean

    @Field({ nullable: true })
    public eq?: boolean

    @Field({ nullable: true })
    public eqi?: boolean

    @Field({ nullable: true })
    public gt?: boolean

    @Field({ nullable: true })
    public gte?: boolean

    @Field({ nullable: true })
    public in?: boolean[]

    @Field({ nullable: true })
    public lt?: boolean

    @Field({ nullable: true })
    public lte?: boolean

    @Field({ nullable: true })
    public ne?: boolean

    @Field(() => BooleanFilterInput, { nullable: true })
    public not?: BooleanFilterInput

    @Field({ nullable: true })
    public notContains?: boolean

    @Field({ nullable: true })
    public notContainsi?: boolean

    @Field({ nullable: true })
    public notIn?: boolean[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field({ nullable: true })
    public or?: boolean[]

    @Field({ nullable: true })
    public startsWith?: boolean
}

registerEnumType(Enum_Componentcoremodulelayouts_Spacingbottom, {
    name: 'Enum_Componentcoremodulelayouts_Spacingbottom',
})
registerEnumType(Enum_Componentcoremodulelayouts_Spacingtop, { name: 'Enum_Componentcoremodulelayouts_Spacingtop' })

@ObjectType()
export class ComponentCoreModuleLayouts {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public __typename?: 'ComponentCoreModuleLayouts'

    @Field(() => Enum_Componentcoremodulelayouts_Spacingbottom, { nullable: true })
    public spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom

    @Field(() => Enum_Componentcoremodulelayouts_Spacingtop, { nullable: true })
    public spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop
}

@ArgsType()
export class PaginationArg {
    @Field({ nullable: true })
    public limit?: number

    @Field({ nullable: true })
    public page?: number

    @Field({ nullable: true })
    public pageSize?: number

    @Field({ nullable: true })
    public start?: number
}

@ArgsType()
export class DateFilterInput {
    @Field({ nullable: true })
    public and?: Date[]

    @Field({ nullable: true })
    public between?: Date[]

    @Field({ nullable: true })
    public contains?: Date

    @Field({ nullable: true })
    public containsi?: Date

    @Field({ nullable: true })
    public endsWith?: Date

    @Field({ nullable: true })
    public eq?: Date

    @Field({ nullable: true })
    public eqi?: Date

    @Field({ nullable: true })
    public gt?: Date

    @Field({ nullable: true })
    public gte?: Date

    @Field({ nullable: true })
    public in?: Date[]

    @Field({ nullable: true })
    public lt?: Date

    @Field({ nullable: true })
    public lte?: Date

    @Field({ nullable: true })
    public ne?: Date

    @Field(() => DateFilterInput, { nullable: true })
    public not?: DateFilterInput

    @Field({ nullable: true })
    public notContains?: Date

    @Field({ nullable: true })
    public notContainsi?: Date

    @Field({ nullable: true })
    public notIn?: Date[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field({ nullable: true })
    public or?: Date[]

    @Field({ nullable: true })
    public startsWith?: Date
}
