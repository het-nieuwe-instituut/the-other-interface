import { isExternalURL } from './links'

describe('links', () => {
    it('isExternalUrl should works correctly', () => {
        const tests = [
            isExternalURL('https://lifely.com'),
            isExternalURL('http://lifely.com'),
            isExternalURL('https://lifely.nl/'),
            isExternalURL('/kitchensink'),
        ]

        expect(tests[0]).toBe(true)
        expect(tests[1]).toBe(true)
        expect(tests[2]).toBe(true)
        expect(tests[3]).toBe(false)
    })
})
