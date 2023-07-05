export interface FilterType {
  name: string
  numberOfInstances: number
  id: string
}

export enum PossibleFilters {
  ByName = 'byName',
  ByDate = 'byDate',
  ByDesLevel = 'byDesLevel',
  ByPerson = 'byPerson',
  ByProject = 'byProject',
  BySubject = 'bySubject',
  ByMaker = 'byMaker',
  ByType = 'byType',
  ByPlace = 'byPlace',
  ByBirthDate = 'byBirthDate',
  ByProfession = 'byProfession',
  ByDeathDate = 'byDeathDate',
  ByAuthor = 'byAuthor',
  ByLocation = 'byLocation',
}

export interface FilterCloudItem {
  name: string
  numberOfInstances: number
  filter: string
  id: string
}
