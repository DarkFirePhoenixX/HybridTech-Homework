let expect = require("chai").expect;
let sum = require("./sum").sum;
describe("sum(arr) - sum array of numbers", function () {
it("should return 10 for ['-3','4','9']", function () {
expect(sum(['-3','4','9'])).to.be.equal(10);
});
});