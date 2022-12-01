export interface Dimensions {
    height: number
    width: number
}

export enum ZoomLevel {
    Zoom0 = 'z0',
    Zoom1 = 'z1',
    Zoom1Stories = 'zStories',
    Zoom2 = 'z2',
    Zoom3 = 'z3',
    Zoom4 = 'z4',
    Zoom5 = 'z5',
    zoomedTo = 'ZoomedTo',
}

export enum ZoomStates {
    Zoom0 = 'Zoom0', // non animated state
    Zoom0ToZoom1 = 'Zoom0ToZoom1',
    Zoom1 = 'Zoom1', // non animated state
    Zoom1ToZoom0 = 'Zoom1ToZoom0',
    Zoom1ToZoom1Stories = 'Zoom1ToZoom1Stories',
    Zoom1Stories = 'Zoom1Stories', // non animated state
    Zoom1ToZoom2 = 'Zoom1ToZoom2',
    Zoom1StoriesToZoom1 = 'Zoom1StoriesToZoom1',
    Zoom1StoriesToZoom5 = 'Zoom1StoriesToZoom5',
    ZoomOutToZoom1 = 'ZoomOutToZoom1',
    Zoom2ToZoom1 = 'Zoom2ToZoom1',
    Zoom2Initial = 'Zoom2Initial',
    Zoom2 = 'Zoom2', // non animated state
    Zoom2ToZoom3 = 'Zoom2ToZoom3',
    ZoomOutToZoom2 = 'ZoomOutToZoom2',
    Zoom3Initial = 'Zoom3Initial',
    Zoom3 = 'Zoom3', // non animated state
    Zoom3ToZoom2 = 'Zoom3ToZoom2',
    Zoom3ToZoom4 = 'Zoom3ToZoom4',
    ZoomOutToZoom3 = 'ZoomOutToZoom3',
    Zoom4Initial = 'Zoom4Initial',
    Zoom4 = 'Zoom4', // non animated state
    Zoom4ToZoom3 = 'Zoom4ToZoom3',
    Zoom4ToZoom5 = 'Zoom4ToZoom5',
    ZoomOutToZoom4 = 'ZoomOutToZoom4',
    Zoom5 = 'z5', // non animated state
    // zoomedTo = 'ZoomedTo', // idk what this is
}
