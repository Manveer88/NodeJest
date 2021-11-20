const fetchPromish1=require('./fetchPromish1')

    test("test asyn funtion",async()=>{
        const data= await fetchPromish1()
            expect(data).toBe('done')
         
    })