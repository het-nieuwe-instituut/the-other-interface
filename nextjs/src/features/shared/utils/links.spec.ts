import { isExternalURL } from './links'

describe('links', () => {
    it('isExternalUrl should works correctly', () => {
        const host = 'localhost.com'
        const tests = [
            isExternalURL('https://lifely.com', host),
            isExternalURL('http://lifely.com', host),
            isExternalURL('https://lifely.nl/', host),
            isExternalURL('/kitchensink', host),
            isExternalURL(host + '/kitchensink', host),
        ]

        expect(tests[0]).toBe(true)
        expect(tests[1]).toBe(true)
        expect(tests[2]).toBe(true)
        expect(tests[3]).toBe(false)
    })
})
