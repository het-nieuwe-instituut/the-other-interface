import { Test, TestingModule } from '@nestjs/testing'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'

describe('AppResolver', () => {
    let resolver: AppResolver
    let service: AppService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService, AppResolver],
        }).compile()

        resolver = module.get<AppResolver>(AppResolver)
        service = module.get<AppService>(AppService)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })

    it('should return "world" from the "hello" query', async () => {
        const expectedValue = service.getHello()
        expect(await resolver.hello()).toBe(expectedValue)
    })
})
