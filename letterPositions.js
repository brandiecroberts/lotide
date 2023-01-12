const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
}
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(3,4);
// assertEqual(true, false)

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

//return all indices in the string where each character is found
//multiple numbers may be needed to represent all the places in the string that it shows up
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i <= sentence.length; i++) {
    let key = sentence[i];
    if (sentence[i] === '') {
    } else if (!results[key]) {
      results[key] = [i];
    } else {
      results[key].push(i);
    }
  }
  return results;
};
console.log(letterPositions('lighthouse in the house'));

// assertEqual(letterPositions("hello").e, [1])
