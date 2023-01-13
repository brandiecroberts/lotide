const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// //assertEqual: implement map
// const assertEqual = function (actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log(`Assertion Passed: ${actual} does match ${expected}`);
//   } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
// }
// const map2 = function(actual, expected){
//   const results2 = [];
//     results2.push(expected, actual);
//   }
//   return results2;

// const results2 = map2(assertEqual, x => x[0]);
// console.log(results2)


// //eqArrays: implment map
// function eqArrays (array1, array2) {
//   if (array1.length !== array2.length){
//     return false;
//   }
//   return !array1.some(function(element, index) {
//     if (element !== array2[index]) {
//       return true;
//     }
//   })
// }