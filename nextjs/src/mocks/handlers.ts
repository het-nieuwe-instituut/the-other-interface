import { setupServer } from 'msw/node'

export const mockServer = setupServer()

// mockHelloQuery((req, res, ctx) => {
//     return res(
//         ctx.data({
//             hello: aQuery().hello,
//         })
//     )
// })
