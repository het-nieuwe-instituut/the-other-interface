import { ArgsType, Field, Float, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
    Enum_Componentcoremodulelayouts_Spacingbottom,
    Enum_Componentcoremodulelayouts_Spacingtop,
    PublicationState,
} from '../../generated/strapi-sdk'
import { UploadFolderFiltersInput } from './shared-types-dependency'

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
    public alternativeText?: string

    @Field({ nullable: true })
    public caption?: string

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public ext?: string

    @Field({ nullable: true })
    // JSON
    public formats?: string

    @Field({ nullable: true })
    public height?: number

    @Field({ nullable: true })
    public previewUrl?: string

    @Field({ nullable: true })
    // JSON
    public provider_metadata?: string

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field({ nullable: true })
    public width?: number

    // related?: Maybe<Array<Maybe<GenericMorph>>>
}
@ArgsType()
export class IntFilterInput {
    @Field(() => [Int], { nullable: true })
    public and?: number[]

    @Field(() => [Int], { nullable: true })
    public between?: number[]

    @Field(() => Int, { nullable: true })
    public contains?: number

    @Field(() => Int, { nullable: true })
    public containsi?: number

    @Field(() => Int, { nullable: true })
    public endsWith?: number

    @Field(() => Int, { nullable: true })
    public eq?: number

    @Field(() => Int, { nullable: true })
    public eqi?: number

    @Field(() => Int, { nullable: true })
    public gt?: number

    @Field(() => Int, { nullable: true })
    public gte?: number

    @Field(() => [Int], { nullable: true })
    public in?: number[]

    @Field(() => Int, { nullable: true })
    public lt?: number

    @Field(() => Int, { nullable: true })
    public lte?: number

    @Field(() => Int, { nullable: true })
    public ne?: number

    @Field(() => IntFilterInput, { nullable: true })
    public not?: IntFilterInput

    @Field(() => Int, { nullable: true })
    public notContains?: number

    @Field(() => Int, { nullable: true })
    public notContainsi?: number

    @Field(() => [Int], { nullable: true })
    public notIn?: number[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Int], { nullable: true })
    public or?: number[]

    @Field(() => Int, { nullable: true })
    public startsWith?: number
}

@ArgsType()
export class FloatFilterInput {
    @Field(() => [Float], { nullable: true })
    public and?: number[]

    @Field(() => [Float], { nullable: true })
    public between?: number[]

    @Field(() => Float, { nullable: true })
    public contains?: number

    @Field(() => Float, { nullable: true })
    public containsi?: number

    @Field(() => Float, { nullable: true })
    public endsWith?: number

    @Field(() => Float, { nullable: true })
    public eq?: number

    @Field(() => Float, { nullable: true })
    public eqi?: number

    @Field(() => Float, { nullable: true })
    public gt?: number

    @Field(() => Float, { nullable: true })
    public gte?: number

    @Field(() => [Float], { nullable: true })
    public in?: number[]

    @Field(() => Float, { nullable: true })
    public lt?: number

    @Field(() => Float, { nullable: true })
    public lte?: number

    @Field(() => Float, { nullable: true })
    public ne?: number

    @Field(() => FloatFilterInput, { nullable: true })
    public not?: FloatFilterInput

    @Field(() => Float, { nullable: true })
    public notContains?: number

    @Field(() => Float, { nullable: true })
    public notContainsi?: number

    @Field(() => [Float], { nullable: true })
    public notIn?: number[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Float], { nullable: true })
    public or?: number[]

    @Field(() => Float, { nullable: true })
    public startsWith?: number
}

@ArgsType()
export class IdFilterInput {
    @Field(() => [ID], { nullable: true })
    public and?: string[]

    @Field(() => [ID], { nullable: true })
    public between?: string[]

    @Field(() => ID, { nullable: true })
    public contains?: string

    @Field(() => ID, { nullable: true })
    public containsi?: string

    @Field(() => ID, { nullable: true })
    public endsWith?: string

    @Field(() => ID, { nullable: true })
    public eq?: string

    @Field(() => ID, { nullable: true })
    public eqi?: string

    @Field(() => ID, { nullable: true })
    public gt?: string

    @Field(() => ID, { nullable: true })
    public gte?: string

    @Field(() => [ID], { nullable: true })
    public in?: string[]

    @Field(() => ID, { nullable: true })
    public lt?: string

    @Field(() => ID, { nullable: true })
    public lte?: string

    @Field(() => ID, { nullable: true })
    public ne?: string

    @Field(() => IdFilterInput, { nullable: true })
    public not?: IdFilterInput

    @Field(() => ID, { nullable: true })
    public notContains?: string

    @Field(() => ID, { nullable: true })
    public notContainsi?: string

    @Field(() => [ID], { nullable: true })
    public notIn?: string[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [ID], { nullable: true })
    public or?: string[]

    @Field(() => ID, { nullable: true })
    public startsWith?: string
}

@ArgsType()
export class JsonFilterInput {
    @Field(() => [JSON], { nullable: true })
    public and?: JSON[]

    @Field(() => [JSON], { nullable: true })
    public between?: JSON[]

    @Field(() => JSON, { nullable: true })
    public contains?: JSON

    @Field(() => JSON, { nullable: true })
    public containsi?: JSON

    @Field(() => JSON, { nullable: true })
    public endsWith?: JSON

    @Field(() => JSON, { nullable: true })
    public eq?: JSON

    @Field(() => JSON, { nullable: true })
    public eqi?: JSON

    @Field(() => JSON, { nullable: true })
    public gt?: JSON

    @Field(() => JSON, { nullable: true })
    public gte?: JSON

    @Field(() => [JSON], { nullable: true })
    public in?: JSON[]

    @Field(() => JSON, { nullable: true })
    public lt?: JSON

    @Field(() => JSON, { nullable: true })
    public lte?: JSON

    @Field(() => JSON, { nullable: true })
    public ne?: JSON

    @Field(() => JsonFilterInput, { nullable: true })
    public not?: JsonFilterInput

    @Field(() => JSON, { nullable: true })
    public notContains?: JSON

    @Field(() => JSON, { nullable: true })
    public notContainsi?: JSON

    @Field(() => [JSON], { nullable: true })
    public notIn?: JSON[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [JSON], { nullable: true })
    public or?: JSON[]

    @Field(() => JSON, { nullable: true })
    public startsWith?: JSON
}

@ObjectType()
export class UploadFileEntity {
    @Field(() => UploadFile, { nullable: true })
    public attributes?: UploadFile

    @Field(() => ID, { nullable: true })
    public id?: string
}
@ObjectType()
export class UploadFileEntityResponse {
    @Field({ nullable: true })
    public data?: UploadFileEntity
}

@ArgsType()
export class StringFilterInput {
    @Field(() => [String], { nullable: true })
    public and?: string[]

    @Field(() => [String], { nullable: true })
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

    @Field(() => [String], { nullable: true })
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

    @Field(() => [String], { nullable: true })
    public notIn?: string[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [String], { nullable: true })
    public or?: string[]

    @Field({ nullable: true })
    public startsWith?: string
}

@ArgsType()
export class BooleanFilterInput {
    @Field(() => [Boolean], { nullable: true })
    public and?: boolean[]

    @Field(() => [Boolean], { nullable: true })
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

    @Field(() => [Boolean], { nullable: true })
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

    @Field(() => [Boolean], { nullable: true })
    public notIn?: boolean[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Boolean], { nullable: true })
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
    @Field(() => [Date], { nullable: true })
    public and?: Date[]

    @Field(() => [Date], { nullable: true })
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

    @Field(() => [Date], { nullable: true })
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

    @Field(() => [Date], { nullable: true })
    public notIn?: Date[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Date], { nullable: true })
    public or?: Date[]

    @Field({ nullable: true })
    public startsWith?: Date
}

@ArgsType()
export class LongFilterInput {
    @Field(() => [Int], { nullable: true })
    public and?: number[]

    @Field(() => [Int], { nullable: true })
    public between?: number[]

    @Field({ nullable: true })
    public contains?: number

    @Field({ nullable: true })
    public containsi?: number

    @Field({ nullable: true })
    public endsWith?: number

    @Field({ nullable: true })
    public eq?: number

    @Field({ nullable: true })
    public eqi?: number

    @Field({ nullable: true })
    public gt?: number

    @Field({ nullable: true })
    public gte?: number

    @Field(() => [Int], { nullable: true })
    public in?: number[]

    @Field({ nullable: true })
    public lt?: number

    @Field({ nullable: true })
    public lte?: number

    @Field({ nullable: true })
    public ne?: number

    @Field(() => LongFilterInput, { nullable: true })
    public not?: LongFilterInput

    @Field({ nullable: true })
    public notContains?: number

    @Field({ nullable: true })
    public notContainsi?: number

    @Field(() => [Int], { nullable: true })
    public notIn?: number[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Int], { nullable: true })
    public or?: number[]

    @Field({ nullable: true })
    public startsWith?: number
}

@ObjectType()
export class UploadFileRelationResponseCollection {
    @Field(() => [UploadFileEntity], { nullable: true })
    public data: UploadFileEntity[]
}

@ArgsType()
export class DateTimeFilterInput {
    @Field(() => [Date], { nullable: true })
    public and?: Date[]

    @Field(() => [Date], { nullable: true })
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

    @Field(() => [Date], { nullable: true })
    public in?: Date[]

    @Field({ nullable: true })
    public lt?: Date

    @Field({ nullable: true })
    public lte?: Date

    @Field({ nullable: true })
    public ne?: Date

    @Field(() => DateTimeFilterInput, { nullable: true })
    public not?: DateTimeFilterInput

    @Field({ nullable: true })
    public notContains?: Date

    @Field({ nullable: true })
    public notContainsi?: Date

    @Field(() => [Date], { nullable: true })
    public notIn?: Date[]

    @Field({ nullable: true })
    public notNull?: boolean

    @Field({ nullable: true })
    public null?: boolean

    @Field(() => [Date], { nullable: true })
    public or?: Date[]

    @Field({ nullable: true })
    public startsWith?: Date
}

@ArgsType()
export class UploadFileFiltersInput {
    @Field(() => StringFilterInput, { nullable: true })
    public alternativeText?: StringFilterInput

    @Field(() => [UploadFileFiltersInput], { nullable: true })
    public and?: UploadFileFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public caption?: StringFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public ext?: StringFilterInput

    @Field(() => UploadFolderFiltersInput, { nullable: true })
    public folder?: UploadFolderFiltersInput

    @Field(() => StringFilterInput, { nullable: true })
    public folderPath?: StringFilterInput

    @Field(() => JsonFilterInput, { nullable: true })
    public formats?: JsonFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public hash?: StringFilterInput

    @Field(() => IntFilterInput, { nullable: true })
    public height?: IntFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public mime?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public name?: StringFilterInput

    @Field(() => UploadFileFiltersInput, { nullable: true })
    public not?: UploadFileFiltersInput

    @Field(() => [UploadFileFiltersInput], { nullable: true })
    public or?: UploadFileFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public previewUrl?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public provider?: StringFilterInput

    @Field(() => JsonFilterInput, { nullable: true })
    public provider_metadata?: JsonFilterInput

    @Field(() => FloatFilterInput, { nullable: true })
    public size?: FloatFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public url?: StringFilterInput

    @Field(() => IntFilterInput, { nullable: true })
    public width?: IntFilterInput
}

registerEnumType(PublicationState, { name: 'PublicationState' })

@ObjectType()
export class Error {
    @Field()
    public code: string

    @Field({ nullable: true })
    public message?: string
}
