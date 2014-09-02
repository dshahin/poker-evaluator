var evaluator = require("..");
var path = require("path");
var assert = require("assert");

assert.equal(evaluator.CARDS['as'], 52);
assert.equal(evaluator.HANDTYPES.length, 10);
assert.deepEqual(evaluator.eval([1, 2, 3, 4, 5]), {
  handType: 8,
  handName: 'four of a kind',
  value: 32769,
  handRank: 1
});


console.log(evaluator.evalHand(["As", "Ac", "Ad", "5d", "5s"]));

console.log(evaluator.evalHand(["As", "Ac", "Ad", "5h", "5s"]));