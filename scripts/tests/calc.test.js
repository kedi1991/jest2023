/** @jest-environment jsdom */

const addition = require("../calc");

describe("calculator", () =>{
    describe("Addition function", () => {
        test("addition of 22 and 34 to return 56", () =>{
            expect(addition(22,34)).toBe(56)
        });
    });
});

beforeEach(() => {
    document.body.innerHTML = '<p id="par"></p>';
});
//for the button test

describe("Test the button click if the text has changed", () => {
    test("Button clicked", () =>{
        buttonClick();
        expect(document.getElementById("par").innerText).toBe("You clicked me!");
    });

});
