//eqArrays
function eqArrays (array1, array2) {
  if (array1.length !== array2.length){
    return false;
  }
  return !array1.some(function(element, index) {
    if (element !== array2[index]) {
      return true;
    }
  })
}

//assertArraysEqual
const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
}

//without function _.without(array, [values])
//remove unwanted data from array

const without = function (source, itemsToRemove) {
  let newArr = [];

  for (i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i])
    newArr.push(source[i]);
  }
  return newArr;
  }

console.log(without([1, 2, 3], [1, 2])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
