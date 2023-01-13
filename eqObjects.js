// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const eqObjects = function(object1, object2) {
  if (object1 === object2)
    return true;
  if (!object1 instanceof Object || !object2 instanceof Object)
    return false;
  if (object1.constructor !== object2.constructor)
    return false;
  for (let x in object1) {
    if (!object1.hasOwnProperty(x)) continue;
    if (!object2.hasOwnProperty(x)) continue;
    if (object1[x] === object2[x]) continue;
    if (typeof object1[x] !== 'object')
    return false;
    if (!object_equals(object1[x], object2[x]))
    return false;
  }
  for (let x in object2) {
    if (object2.hasOwnProperty(x) && !object1.hasOwnProperty(x)) return false;
    return true;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(eqObjects(shirtObject, anotherShirtObject));

const longSleeveShirtObject = {
  size: 'medium',
  color: 'red',
  sleeveLength: 'long'
};
console.log(eqObjects(shirtObject, longSleeveShirtObject));

