
const relations = {
  relations: [
    { type: 'Publications', total: null, randomRelations: ['300230524', '300165507'] },
    { type: 'People', total: null, randomRelations: ['18344', '22384'] },
    { type: 'Archives', total: null, randomRelations: ['110000631', '110000565'] },
    { type: 'Stories', total: null, randomRelations: ['1', '3'] },
    { type: 'Objects', total: null, randomRelations: ['4261', '3487'] },
  ]
}

const zoomLevel3ObjectDetail = {   
  id: '1',
  thumbnail: 'https://picsum.photos/500/150',
  title: 'Mocked Situatietekening Sanatorium Zonnestraal (Hilversum) Mocked',
}

const zoomLevel3PersonDetail = {   
  id: '2',
  thumbnail: 'https://picsum.photos/200/400',
  title: 'Wall, Alex',
}

const zoomLevel3ArchiveDetail = {   
  id: '3',
  thumbnail: 'https://picsum.photos/300/200',
  title: 'Correspondentie',
}

const zoomLevel3PublicationDetail = {   
  id: '4',
  thumbnail: 'https://picsum.photos/500/200',
  title: 'Bd.25',
}


export const zoomLevel3Data = {
  zoomLevel3Object: zoomLevel3ObjectDetail,
  zoomLevel3Person: zoomLevel3PersonDetail,
  zoomLevel3Archive: zoomLevel3ArchiveDetail,
  zoomLevel3Publication: zoomLevel3PublicationDetail,
  relations
}
