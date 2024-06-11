import { ArgsType, Field } from '@nestjs/graphql'
import { Locale } from './locale.type'

@ArgsType()
export class LocaleArgs {
  @Field(() => Locale)
  public locale: Locale
}
