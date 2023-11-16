const relations = {
  relations: [
    { type: 'Publications', total: null, randomRelations: ['300230524', '300165507'] },
    { type: 'People', total: null, randomRelations: ['18344', '22384'] },
    { type: 'Archives', total: null, randomRelations: ['110000631', '110000565'] },
    { type: 'Stories', total: null, randomRelations: ['1', '3'] },
    { type: 'Objects', total: null, randomRelations: ['4261', '3487'] },
  ],
}

const zoomLevel3ObjectDetail = {
  id: '1',
  thumbnail: [
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
  ],
  title: 'Mocked Situatietekening Sanatorium Zonnestraal (Hilversum) Mocked',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel placerat ipsum. Vivamus tincidunt, ipsum at ullamcorper malesuada, justo arcu aliquet justo, in euismod neque purus sit amet libero. Sed sit amet justo at lorem fermentum posuere. Ut sit amet risus eu libero posuere tincidunt. Vivamus auctor, eros id hendrerit dictum, mi tortor eleifend purus, eu viverra nisi libero at nisl. In non augue et turpis tristique facilisis. Sed facilisis odio eget bibendum convallis. Nulla facilisi. Nullam nec tincidunt enim, quis tincidunt libero. Curabitur blandit ultrices ligula, eget facilisis lectus bibendum eu. Aliquam erat volutpat. Vestibulum viverra lectus ut tortor vehicula tristique. Etiam consectetur efficitur tellus, eget commodo justo varius in. Nullam id tortor vel erat eleifend vehicula a nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus volutpat ligula in metus sollicitudin ultricies. Quisque nec erat quis libero consequat viverra a eu arcu. Sed consequat efficitur sapien, in facilisis ante venenatis eget. Donec consectetur tellus nec odio hendrerit, id cursus odio ullamcorper. Fusce elementum, justo non convallis vehicula, nulla erat condimentum justo, nec bibendum velit dui eu purus. Sed in est nec odio malesuada hendrerit. Quisque commodo vel augue quis egestas. Vestibulum ac malesuada libero. Vivamus quis elit tincidunt, tristique libero nec, posuere nunc. Integer vel ex eget ipsum varius malesuada vel nec ante. In nec hendrerit lectus. Ut non elit quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget feugiat metus, in fermentum dolor. Integer id turpis a nisl tristique congue',
}

const zoomLevel3PersonDetail = {
  id: '2',
  thumbnail: ['https://picsum.photos/500/150'],
  title: 'Wall, Alex',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

const zoomLevel3ArchiveDetail = {
  id: '3',
  thumbnail: [
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
  ],
  title: 'Correspondentie',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

const zoomLevel3PublicationDetail = {
  id: '4',
  thumbnail: [
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
    'https://picsum.photos/500/150',
  ],
  title: 'Bd.25',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

export const zoomLevel3Data = {
  zoomLevel3Object: zoomLevel3ObjectDetail,
  zoomLevel3Person: zoomLevel3PersonDetail,
  zoomLevel3Archive: zoomLevel3ArchiveDetail,
  zoomLevel3Publication: zoomLevel3PublicationDetail,
  relations,
}
