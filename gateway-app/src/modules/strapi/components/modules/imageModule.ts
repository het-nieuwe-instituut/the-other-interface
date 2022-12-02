import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts, UploadFileEntityResponse } from '../../shared-types'
import { ComponentModulesCollectionRelation } from './collectionRelation'

@ObjectType()
export class ComponentModulesImage {
    @Field({ nullable: true })
    public alt_text?: string

    @Field({ nullable: true })
    public caption?: string

    @Field(() => ID)
    public id: string

    @Field(() => UploadFileEntityResponse)
    public image: UploadFileEntityResponse

    @Field(() => ComponentCoreModuleLayouts)
    public imageModuleLayout: ComponentCoreModuleLayouts

    @Field(() => ComponentModulesCollectionRelation, { nullable: true })
    public captionRelation?: ComponentModulesCollectionRelation

    @Field(() => ComponentModulesCollectionRelation, { nullable: true })
    public imageRelation?: ComponentModulesCollectionRelation
}
