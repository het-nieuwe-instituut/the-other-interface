import { useHelloQuery } from 'src/generated/graphql'

export const Hello = () => {
    const { data, loading, error } = useHelloQuery()

    if (error) return <p>{error.message}</p>
    if (loading) return <p>loading</p>
    return <p>{data?.hello}</p>
}
