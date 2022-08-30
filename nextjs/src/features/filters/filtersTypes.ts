export enum FilterTypes {
    TimePeriod = 'TIME_PERIOD',
    MAKER = 'Maker'
}

export type FiltersState = {
    activeFilter: FilterTypes | null
}