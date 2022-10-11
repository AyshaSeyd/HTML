const fact = require("./ReverseFactorial.js");

const { expect } = require("chai");

describe("Factorial Testing", () => {
    it("should equal 5!", () => {

        expect(fact(120)).to.equal(5);
    })
    it("should fail", () => {
        expect(fact(5)).to.equal("None");
    })
})
