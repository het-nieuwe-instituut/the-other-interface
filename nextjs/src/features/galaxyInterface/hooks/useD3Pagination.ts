/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStore } from '@/features/shared/hooks/useStore'
import { galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

interface Props {
    pageSize: number
    page?: number
    total: number
    params?: { [key: string]: string | undefined }
    states: {
        zoomBackState: ZoomStates
        zoomInState: ZoomStates
    }
}

export function useD3Pagination({ pageSize, total, page, states, params }: Props) {
    const store = useStore()

    async function paginateNext() {
        console.log(page)

        const newPage = (page ?? 0) + 1

        const totalSizeExceeded = newPage > (total ?? 0)
        if (totalSizeExceeded) {
            return
        }

        console.log(newPage)

        store.dispatch(
            galaxyInterfaceActions.setActiveZoom({
                activeZoom: states.zoomBackState,
                params: { ...params, page: newPage.toString() },
            })
        )
    }

    async function paginateBack() {
        if (!page) {
            return
        }

        const newPage = (page ?? 0) - 1

        const minimalSizeExceeded = newPage < 1
        if (minimalSizeExceeded) {
            return
        }

        store.dispatch(
            galaxyInterfaceActions.setActiveZoom({
                activeZoom: states.zoomBackState,
                params: { ...params, page: newPage.toString() },
            })
        )
    }

    return {
        paginateNext,
        paginateBack,
        totalPages: Math.ceil((total + 1) / pageSize),
        total: total + 1,
        currentPage: page ?? 0 + 1,
    }
}
