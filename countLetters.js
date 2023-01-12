const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const countLetters = function (letters, lettersToCount){
  let result = {};
  for (let i = 0; i <= letters.length; i++) {
    let key = letters[i];
    if (lettersToCount[key]) {
      if (result[key]) {
        result[key] += 1;
      } else {
        result[key] = 1
      }
    }
  }
  console.log(result);
  return result;
}
const firstNames = 'Lighthouse Labs';

const result1 = countLetters(firstNames, {
  a: true,
  i: true, 
  h: true,
  g: false
});