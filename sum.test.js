const sum=require('./Sum')
const sum1=require('./Sum1')
const sum3=require("./sum3")
const sum4=require("./sum4")
test("test case ",()=>{
    expect(sum()).toBe(3)
});



test("test2 case ",()=>{
    expect(sum1(10,20)).not.toBe(130)
});
test("test3 case ",()=>{
    expect(sum3()).toEqual({name:'raju'})
});

test("test4 case ",()=>{
    expect(sum4()).toMatch("hello")
});
