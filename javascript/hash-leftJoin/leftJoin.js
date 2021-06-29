"use strict";
/**
 * this function implements a simplified LEFT JOIN for 2 hashmaps
 * @param {*} leftHashmap hashmap that has word strings as keys, and a synonym of the key as values.
 * @param {*} rightHashmap hashmap that has word strings as keys, and antonyms of the key as values.
 * @returns local array of joined values
 */
function leftJoin(leftHashmap, rightHashmap) {
  if ((leftHashmap && !rightHashmap) || (!leftHashmap && rightHashmap)) {
    return null;
  }
  let arrOfJoin = [];

  // Combine the key and corresponding values
  // into a new data structure according to LEFT JOIN logic.
  //looping over the firts hashmap
  for (
    let leftPointer = 0;
    leftPointer < Object.keys(leftHashmap.table).length;
    leftPointer++
  ) {
    //extracting the left hashmap key, value pairs
    let leftKey = Object.values(leftHashmap.table)[leftPointer].head.value.key;
    let leftValue = Object.values(leftHashmap.table)[leftPointer].head.value
      .value;
    for (
      let rightPointer = 0;
      rightPointer < Object.keys(rightHashmap.table).length;
      rightPointer++
    ) {
      //extracting the right hashmap key, value pains
      let rightKey = Object.values(rightHashmap.table)[rightPointer].head.value
        .key;
      let rightValue = Object.values(rightHashmap.table)[rightPointer].head
        .value.value;
      //to apply the left join concepts
      // check if the left key is key is equal to right key of both hash maps
      if (leftKey === rightKey) {
        // combine the the key and corresponding value into a local array.
        arrOfJoin.push([leftKey, leftValue, rightValue]);
        break;
      } else if (rightPointer === Object.keys(rightHashmap.table).length - 1) {
        // if the right key is equal to the right key of the key as values, add  null
        arrOfJoin.push([leftKey, leftValue, null]);
      }
    }
  }
  // return the local array of joined values
  return arrOfJoin;
}

module.exports = leftJoin;
