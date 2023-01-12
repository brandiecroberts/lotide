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
    if (typeof object1[x] !== 'object') return false;
    if (!object_equals(object1[x], object2[x])) return false;
  }
  for (x in object2) {
    if (object2.hasOwnProperty(x) && !object1.hasOwnProperty(x)) return false;
    return true;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

// console.log(eqObjects(shirtObject, anotherShirtObject));

const longSleeveShirtObject = {
  size: 'medium',
  color: 'red',
  sleeveLength: 'long'
};
// console.log(eqObjects(shirtObject, longSleeveShirtObject));

//assertObjectEqual
const assertObjectsEqual = function(actual, expected) {
  // const inspect = require('util').inspect; // <= add this
  if (actual === expected)
    return (`✅Assertion Passed: ${actual} === ${expected}`);

  if (!(actual instanceof Object) || !(expected instanceof Object))
    return (`❌Assertion Failed: ${actual} !== ${expected}`);

  if (actual.constructor !== expected.constructor)
    return (`❌Assertion Failed: ${actual} !== ${expected}`);

  for (var y in actual) {
    if (!actual.hasOwnProperty(y)) continue;
    if (!expected.hasOwnProperty(y))
    return (`❌Assertion Failed: ${actual} !== ${expected}`);
    if (actual[y] === expected[y]) continue;
    if (typeof actual[y] !== 'object')
    return (`❌Assertion Failed: ${actual} !== ${expected}`);
    if (!object_equals(actual[y], expected[y]))
    return (`❌Assertion Failed: ${actual} !== ${expected}`);
  }
  for (y in expected) {
    if (expected.hasOwnProperty(y) && !actual.hasOwnProperty(y))
    return (`❌Assertion Failed: ${actual} !== ${expected}`);
  }
  return (`✅Assertion Passed: ${actual} === ${expected}`);
};

const shirtObject1 = { color: "red", size: "medium" };
const anotherShirtObject1 = { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject1, anotherShirtObject1));

const longSleeveShirtObject1 = {
  size: 'medium',
  color: 'red',
  sleeveLength: 'long'
};
console.log(assertObjectsEqual(shirtObject1, longSleeveShirtObject1));



