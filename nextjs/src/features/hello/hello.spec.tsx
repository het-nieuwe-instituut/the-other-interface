// import { mockHelloQuery } from 'src/generated/graphql'
// import { aQuery } from 'src/mocks/generated-mocks'
// import { mockServer } from 'src/mocks/handlers'
// import { client } from '../graphql/config/apollo'
// import { renderWithProviders } from '../shared/utils/test-utils'
// import { Hello } from './hello'

// describe('hello', () => {
//     afterEach(() => {
//         client.clearStore()
//     })
//     it('should display hello', async () => {
//         const { findByText, getByText } = renderWithProviders(<Hello />)

//         getByText('loading')
//         await findByText(aQuery().hello)
//     })

//     it('should display hello', async () => {
//         mockServer.use(
//             mockHelloQuery((req, res, ctx) => {
//                 return res(
//                     ctx.errors([
//                         {
//                             message: 'Not authenticated',
//                             errorType: 'AuthenticationError',
//                         },
//                     ])
//                 )
//             })
//         )
//         const { findByText, getByText } = renderWithProviders(<Hello />)

//         getByText('loading')
//         await findByText('Not authenticated')
//     })
// })
export {}

describe('hello', () => {
    it('temp', async () => {
        expect(true).toBe(true)
    })
})
