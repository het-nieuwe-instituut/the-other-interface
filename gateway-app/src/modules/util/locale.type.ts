import { registerEnumType } from '@nestjs/graphql'

export enum Locale {
  nl = 'nl',
  en = 'en',
}

registerEnumType(Locale, { name: 'Locale' })
