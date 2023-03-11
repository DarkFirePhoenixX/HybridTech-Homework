let expect = require("chai").expect;
let isSymmetricArray = require("./symmetry").isSymmetric;
describe("Test array of numbers", function () {
    it("should return true for [1,2,3,3,2,1]", function () {
        expect(isSymmetricArray([1, 2, 3, 3, 2, 1])).to.be.true;
    });
});