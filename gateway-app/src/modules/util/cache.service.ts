import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { orderBy } from 'lodash'

@Injectable()
export class CacheService {
  public constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  public async get<T>(key: string, fn: () => Promise<T>, ttl?: number): Promise<T> {
    const cached = await this.cacheManager.get<T>(key)
    if (cached) {
      return cached
    }

    const data = await fn()
    await this.cacheManager.set(key, data, ttl)

    return data
  }

  public async invalidate(): Promise<void> {
    await this.cacheManager.reset()
  }

  public static getCacheKeyFromStrings(...args: (string | undefined | null)[]): string {
    return args.filter(Boolean).join('_')
  }

  /**
   * @requires non-nested-object
   */
  public static getOrderedObjectCacheKey(obj?: object): string {
    if (!obj) {
      return ''
    }

    return orderBy(obj).join('_')
  }
}
