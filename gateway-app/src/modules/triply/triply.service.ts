import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { PaginationArgs } from '../util/paginationArgs.type'
import { RollbarService } from '../util/rollbar.service'
import { Enum_Triplyrecord_Type } from 'src/generated/strapi-sdk'

/**
 * Due to typescript's limitations, we decided to use this approach to verify expected
 * keys in runtime. There are other solutions, but those require fundamental changes to
 * how we use queryTriplyData, or to the core of typescript.
 *
 * A sample use case would be:
 * 		interface A {
 * 			foo: bar
 * 		}
 *
 * 		const aKeys: KeysToVerify<T> = {
 * 			foo: true 	<-- without this key/value, compiler will error
 * 		}
 *
 * 		// if there is a type mismatch between A & aKeys, compiler will error
 * 		... triplyService.queryTriplyData<A>(..., aKeys, ...)
 *
 *
 * Although this approach creates duplicate code (double interface definition), the type
 * safety is still enforced. If the actual interface/type (T) is updated, the compiler
 * should error at the constant definition.
 *
 * At the moment, the keys are only used to verify their existence. If needed, it could
 * be extended to check for value types as well.
 *
 */
export type KeysToVerify<T> = {
  [P in keyof T]?: boolean | KeysToVerify<T[P]>
}

@Injectable()
export class TriplyService {
  private readonly endpointBaseURL: string
  private readonly apiKey: string
  private readonly baseQueryPath: string

  public constructor(
    configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly rollbarService: RollbarService
  ) {
    this.endpointBaseURL = configService.getOrThrow('TRIPLI_API_BASEURL')
    this.apiKey = configService.getOrThrow('TRIPLY_API_KEY')
    this.baseQueryPath = ''
    const env = configService.getOrThrow('ENV')

    if (env === 'development' || env === 'staging') {
      this.baseQueryPath = '/queries/the-other-interface-testing'
    } else if (env === 'acceptance') {
      this.baseQueryPath = '/queries/the-other-interface-acceptance'
    } else {
      this.baseQueryPath = '/queries/the-other-interface'
    }
  }

  private defaultPage = '1'
  private defaultPageSize = '16'

  public async queryTriplyData<ReturnDataType>(
    endpointArg: string,
    keysToVerify: KeysToVerify<ReturnDataType>,
    paginationArgs?: PaginationArgs,
    searchParams?: Record<string, string>
  ) {
    const endpoint = this.getEndpointForArg(endpointArg)

    if (paginationArgs) {
      endpoint.searchParams.append(
        'page',
        paginationArgs.page ? paginationArgs.page.toString() : this.defaultPage
      )
      endpoint.searchParams.append(
        'pageSize',
        paginationArgs.pageSize ? paginationArgs.pageSize.toString() : this.defaultPageSize
      )
    }

    if (searchParams) {
      for (const [key, value] of Object.entries(searchParams)) {
        endpoint.searchParams.append(key, value)
      }
    }

    const res = await this.fetch<ReturnDataType>(endpoint)
    this.checkResponseType(res.data, keysToVerify)

    return res
  }

  private fetch<ReturnDataType>(endpoint: URL) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.get<ReturnDataType[]>(endpoint.toString(), { headers })

    return lastValueFrom(res)
  }

  private getEndpointForArg(endpointArg: string) {
    if (endpointArg.startsWith('https://')) {
      return new URL(endpointArg)
    }

    const endpointSuffix = endpointArg.startsWith('/') ? endpointArg : `/${endpointArg}`

    return new URL(`${this.endpointBaseURL}${this.baseQueryPath}${endpointSuffix}`)
  }

  private checkResponseType<T>(responseData: T | T[], keysToVerify: KeysToVerify<T>): void {
    if (responseData === null || responseData === undefined) {
      return
    }

    if (Array.isArray(responseData)) {
      if (responseData.length === 0) {
        return
      }
      responseData.forEach(item => this.checkObjectKeys(item, keysToVerify))
    } else {
      this.checkObjectKeys(responseData, keysToVerify)
    }
  }

  private checkObjectKeys<T>(dataObject: T, keysToVerify: KeysToVerify<T>): void {
    ;(Object.keys(keysToVerify) as Array<keyof T>).forEach(key => {
      const value = dataObject[key]
      const required = keysToVerify[key]

      if (required === true && value === undefined) {
        const message = `Missing required key: ${String(key)} in ${JSON.stringify(dataObject)}`
        this.rollbarService.logError(message)
      }

      if (typeof required === 'object' && required !== null && value !== undefined) {
        this.checkObjectKeys(value as any, required as KeysToVerify<any>)
      }
    })
  }

  public async postQueryTriplyData<ReturnDataType>(
    endpointArg: string,
    keysToVerify: KeysToVerify<ReturnDataType>,
    paginationArgs?: PaginationArgs,
    searchParams?: Record<string, string>
  ): Promise<ReturnDataType> {
    const endpoint = this.getEndpointForArg(endpointArg)

    if (paginationArgs) {
      endpoint.searchParams.append(
        'page',
        paginationArgs.page ? paginationArgs.page.toString() : this.defaultPage
      )
      endpoint.searchParams.append(
        'pageSize',
        paginationArgs.pageSize ? paginationArgs.pageSize.toString() : this.defaultPageSize
      )
    }

    if (searchParams) {
      for (const [key, value] of Object.entries(searchParams)) {
        endpoint.searchParams.append(key, value)
      }
    }

    const res = await this.postFetch<ReturnDataType>(endpoint)
    this.checkResponseType(res.data, keysToVerify)

    return res.data
  }

  private async postFetch<ReturnDataType>(endpoint: URL) {
    const headers = { Authorization: `Bearer ${this.apiKey}` }
    const res = this.httpService.post<ReturnDataType>(endpoint.toString(), null, { headers })

    return lastValueFrom(res)
  }

  public mapTypeToEnum(type: string): Enum_Triplyrecord_Type {
    switch (type.toLowerCase()) {
      case 'archives':
        return Enum_Triplyrecord_Type.Archive
      case 'media':
        return Enum_Triplyrecord_Type.Media
      case 'objects':
        return Enum_Triplyrecord_Type.Object
      case 'people':
        return Enum_Triplyrecord_Type.People
      case 'publications':
        return Enum_Triplyrecord_Type.Publication
      default:
        throw new Error(`Unsupported type: ${type}`)
    }
  }
}
