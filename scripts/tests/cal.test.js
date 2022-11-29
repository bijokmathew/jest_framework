/**
 * @jest-environment jsdom
 */

const addition = require("../cal");

describe("calculator",()=>{
    describe("addition function",()=>{
        test("Should return 42 for 20+22",()=>{
            expect(addition(20,22)).toBe(42);
        })
    });
    describe("substraction function",()=> {
        
    });
})