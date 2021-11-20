const fetchData= require("./fetchData")

test("call back function case ",(done)=>{
    function callback(data)
    {
        try
        {
            expect(data).toBe('Hello')
            done();
        }
        catch(err)
        {
            done(err)
        }
    }
    fetchData(callback);
  
})