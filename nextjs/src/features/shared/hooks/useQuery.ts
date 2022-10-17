import { useState, useEffect } from "react"

function useQuery<T, Q extends () => ReturnType<Q>>(keys: T, query: Q) {
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState<Awaited<ReturnType<Q>> | undefined>(undefined)

    useEffect(() => {
        async function handle() {
            try {
                setIsError(false)
                setIsloading(true)
                const result = await query()
                setIsloading(false)
                setData(result as Awaited<ReturnType<Q>> | undefined)
            } catch {
                setIsError(true)
            }
        }

        handle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        isError,
        data,
    }
}

export default useQuery