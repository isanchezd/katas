const inArray = require('./index')

describe('which-are-in kata suite test', () => {
    test("test", () => {
        const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
        let a1 = ["xyz", "live", "strong"]

        expect(inArray(a1, a2)).toEqual(["live", "strong"])
        
        a1 = ["live", "strong", "arp"]
        
        expect(inArray(a1, a2)).toEqual(["arp", "live", "strong"])

        a1 = ["tarp", "mice", "bull"]
        
        expect(inArray(a1, a2)).toEqual([])
    })
})