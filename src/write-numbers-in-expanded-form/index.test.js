const expandedForm = require('./index')


describe('write-numbers-in-express-form Kata Test Suite', () => {
    test ('When the input is 12 the output should be 10 + 2', ()=> {
        expect(expandedForm(12)).toEqual('10 + 2')
    })

    test ('When the input is 42 the output should be 40 +2 ', ()=> {
        expect(expandedForm(42)).toEqual('40 + 2')

    })

    test ('When the input is 70304 the output should be 70000 + 300 + 4', ()=> {
        expect(expandedForm(70304)).toEqual('70000 + 300 + 4')
    })
})