import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql'
import { AppService } from './app.service'

@ObjectType()
export class TypeWithObjectsCount {
    @Field()
    public class: string

    @Field()
    public numberOfInstances: string
}

@Resolver()
export class AppResolver {
    public constructor(private readonly appService: AppService) {}

    @Query(() => String)
    public async hello() {
        return this.appService.getHello()
    }

    @Query(() => [TypeWithObjectsCount])
    public objectsPerType(): Promise<TypeWithObjectsCount[]> {
        return this.appService.getObjectsPerType()
    }
}
