export const useRouter = jest.fn().mockImplementation(() => {
    return {
        route: '/',
        pathname: '',
        query: {
            locale: 'nl',
            query: {
                slug: 'test',
            },
        },
        asPath: '',
    }
})
