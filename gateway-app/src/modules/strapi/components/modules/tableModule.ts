import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'
import { ComponentCoreTableBody, ComponentCoreTableHead } from '../core/table'

@ObjectType()
export class Table {
  @Field(() => [ComponentCoreTableBody], { nullable: true })
  public TableBody?: ComponentCoreTableBody[]

  @Field(() => ComponentCoreTableHead, { nullable: true })
  public Tablehead?: ComponentCoreTableHead

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public name?: string

  @Field({ nullable: true })
  public publishedAt?: Date

  @Field({ nullable: true })
  public updatedAt?: Date
}

@ObjectType()
export class TableEntity {
  @Field(() => Table, { nullable: true })
  public attributes?: Table

  @Field(() => ID, { nullable: true })
  public id?: string
}
@ObjectType()
export class TableEntityResponse {
  @Field({ nullable: true })
  public data?: TableEntity
}

@ObjectType()
export class ComponentModulesTableModule {
  @Field(() => ID)
  public id: string

  @Field(() => ComponentCoreModuleLayouts)
  public tableModuleLayout: ComponentCoreModuleLayouts

  @Field(() => TableEntityResponse, { nullable: true })
  public table?: TableEntityResponse
}
