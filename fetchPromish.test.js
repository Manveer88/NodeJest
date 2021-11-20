const fetchPromish=require('./fetchPromish')

    test("Promise testing",()=>{
        return fetchPromish().then((data)=>{
            expect(data).toBe('hello')
        })
    })