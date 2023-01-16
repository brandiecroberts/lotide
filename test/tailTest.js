// const tail = require('../tail');
// // const tail = function(array) {
// //   const newArray = array.slice(1, array.length);
// //   return newArray;
// // };

// // let words = ["lighthouse", "labs", "bootcamp"];
// // let newArray = tail(words);
// // console.log(newArray);

// module.exports = tail;


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [LHL] for [LHL, is, fun]", () => {
    assert.deepEqual(tail(['LHL', 'is', 'fun']), ['is', 'fun']);
  });
  it("returns 'Hello' for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
});