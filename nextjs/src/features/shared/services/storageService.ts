class StorageService {
  static getItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }
    return null
  }

  static setItem(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    }
  }
}

export default StorageService
