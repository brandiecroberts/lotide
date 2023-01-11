const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`Assertion Passed: ${actual} does match ${expected}`);
  } else console.log(`Assertion Failed: ${actual} does not match ${expected}`);
}
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(3,4);
assertEqual(true, false)
