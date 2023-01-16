const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
};

assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1,1);
assertArraysEqual(3,4);
assertArraysEqual(true, false);

module.exports = assertArraysEqual;

