import { useQuery } from '@apollo/client'
import { PageConfiguration, PAGE_CONFIGURATION } from '../utils/pageConfiguration'

export function usePageConfiguration() {
    const query = useQuery<PageConfiguration>(PAGE_CONFIGURATION)

    return query
}
