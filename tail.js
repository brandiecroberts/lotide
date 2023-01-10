const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

function tail(array) {
  const newArray = array.slice(1, array.length);
  return newArray;
}
let words = ["lighthouse", "labs", "bootcamp"];
let newArray = tail(words);
console.log(newArray);

