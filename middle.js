//assertArraysEqual function
const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
}
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(3,4);
// assertEqual(true, false)

//eqArrays function
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
  // assertEqual(eqArrays([1,2,3], [1,2,3]), true);
  // assertEqual(eqArrays([1,2,3], [3,2,1]), false);
  // assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  // assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

  //middle function
  //arrays with one or two elements = return empty
  //array with odd number = single middle element returned
  //array with even number = two middle elements returned
const middle = function(numbers) {
  if (numbers.length <= 2) 
  return [];
  let index = Math.floor(numbers.length / 2);
  if (numbers.length % 2 == 0) {
    return [numbers[index - 1], numbers[index]]; 
  } else {
    return [numbers[index]]
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
