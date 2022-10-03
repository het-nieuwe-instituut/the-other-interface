import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'
import {
    ComponentCoreModuleLayouts,
    PaginationArg,
    UploadFileFiltersInput,
    UploadFileRelationResponseCollection,
} from '../../shared-types'

@ObjectType()
export class ComponentModulesImageCarousel {
    @Field(() => ID)
    public id: string

    @Field(() => ComponentCoreModuleLayouts)
    public imageCarouselModuleLayout: ComponentCoreModuleLayouts

    @Field({ nullable: true })
    public __typename?: 'ComponentModulesImageCarousel'

    @Field({ nullable: true })
    public description?: string

    @Field(() => UploadFileRelationResponseCollection, { nullable: true })
    public images?: UploadFileRelationResponseCollection
}

@ArgsType()
export class ComponentModulesImageCarouselImagesArgs {
    @Field(() => UploadFileFiltersInput, { nullable: true })
    public filters?: UploadFileFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field({ nullable: true })
    public sort?: string[]
}
