import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts, UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentModulesImage {
    @Field({ nullable: true })
    public typename?: 'ComponentModulesImage'

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
}
