/**
 * @jest-environment jsdom
 */

const buttonClickfun = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let index = fs.readFileSync("index.html","utf-8");
    document.open();
    document.write(index);
    document.close();
});

describe("DOM test", () => {
    test("expect p content to change", () => {
        buttonClickfun();
        expect(document.getElementById("par").innerText).toEqual("You clicked");
    });
    test("expect h1 shold exist",()=>{
        buttonClickfun();
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
})