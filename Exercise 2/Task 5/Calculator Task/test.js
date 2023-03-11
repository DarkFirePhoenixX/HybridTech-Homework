let expect = require("chai").expect;
let calculator = require("./calculator").createCalculator();
describe("Calculator test", function () {
    it("should return 3 for 11-8", function () {
        calculator.add(11);
        calculator.subtract(8);
        expect(calculator.get()).to.equal(3);
    });
});