// const middle = require('../middle');

// const middle = function(numbers) {
//   if (numbers.length <= 2)
//     return [];
//   let index = Math.floor(numbers.length / 2);
//   if (numbers.length % 2 === 0) {
//     return [numbers[index - 1], numbers[index]];
//   } else {
//     return [numbers[index]];
//   }
// };
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// module.exports = middle;

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});