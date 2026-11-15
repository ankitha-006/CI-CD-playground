import sum from './sum.js';
describe("test foe sum function",()=>{
test("add 2+2 equals 4",()=>{
    expect(sum(2,2)).toBe(4);
});
test("add -5-1 equals -6",()=>{
    expect(sum(-5,-1)).toBe(-6);
});
})
