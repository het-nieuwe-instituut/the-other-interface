import dayjs from 'dayjs'
import { Locale } from 'src/generated/graphql'

export class DateService {
  public static formatDateString({
    date,
    format,
    locale,
  }: {
    date: string
    format: string
    locale: Locale
  }) {
    return dayjs(date).locale(locale).format(format)
  }
}
