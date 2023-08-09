export const imageBasePath = (url?: string) => {
  if (process.env.parsed.NEXT_PUBLIC_ENV === 'local' && !url?.includes('http')) {
    return `http://localhost:1337${url}`
  }
  return url
}
