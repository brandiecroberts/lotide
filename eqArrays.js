const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Implement eqArrays function
//eqArrays function takes two arrays and returns true or false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return !array1.some(function(element, index) {
    if (element !== array2[index]) {
      return true;
    }
  });
};
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [3,2,1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);


module.exports = eqArrays;