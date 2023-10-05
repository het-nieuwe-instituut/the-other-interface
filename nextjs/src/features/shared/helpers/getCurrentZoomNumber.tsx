export const getCurrentZoomNumber = (pathname?: string | null) => {
  if (pathname?.includes('detail')) return 3
  if (pathname?.includes('landingpage')) return 2
  return 1
}
