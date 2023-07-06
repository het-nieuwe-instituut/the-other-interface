export const galaxyTypeByTransltions = {
  ['publications']: 'publicationsBy' as const,
  ['archives']: 'archivesBy' as const,
  ['people']: 'peopleBy' as const,
  ['objects']: 'objectsBy' as const,
}

export const getGalaxyTypeByTranslationsKey = (type: keyof typeof galaxyTypeByTransltions) => {
  return galaxyTypeByTransltions[type]
}
