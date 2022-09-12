import { mockHelloQuery } from '../generated/graphql'
import { setupServer } from 'msw/node'
import { aQuery } from './generated-mocks'

export const mockServer = setupServer(
    mockHelloQuery((req, res, ctx) => {
        return res(
            ctx.data({
                hello: aQuery().hello,
            })
        )
    })
)
