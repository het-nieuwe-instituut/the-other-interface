const publicationZoomLevel2Data = [
  { filter: 'Soort publicatie', id: 'typeOfPublication' },
  { filter: 'Geografisch trefwoord', id: 'geographicalKeyword' },
  { filter: 'Auteur(s)', id: 'author' },
  { filter: 'Gerelateerde persoon/instelling', id: 'relatedPerson' },
  { filter: 'Onderwerp', id: 'subject' },
]

const objectZoomLevel2Data = [
  { filter: 'Vervaardiger', id: 'creator' },
  { filter: 'Datering', id: 'date' },
  { filter: 'Onderwerp', id: 'subject' },
  { filter: 'Technieken', id: 'technique' },
  { filter: 'Objectnaam', id: 'objectName' },
  { filter: 'Materialen', id: 'material' },
  { filter: 'Persoon/instelling', id: 'personInstitution' },
]

const peopleZoomLevel2Data = [
  { filter: 'Naam soort', id: 'nameType' },
  { filter: 'Geboortedatum', id: 'birthDate' },
  { filter: 'Overlijdensdatum', id: 'deathDate' },
  { filter: 'Periode', id: 'period' },
  { filter: 'Beroep/Werkveld', id: 'profession' },
  { filter: 'Plaats', id: 'place' },
]

const archivesZoomLevel2Data = [
  { filter: 'Datering', id: 'date' },
  { filter: 'Beschrijvingsniveau', id: 'descriptionLevel' },
  { filter: 'Gerelateerde namen', id: 'relatedNames' },
]

export {
  publicationZoomLevel2Data,
  objectZoomLevel2Data,
  peopleZoomLevel2Data,
  archivesZoomLevel2Data,
}
