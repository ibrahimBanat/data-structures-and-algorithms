"use strict";

function leftJoin(left, right) {
  if ((left && !right) || (!left && right)) {
    return null;
  }
  let joinArr = [];
  for (let i = 0; i < Object.keys(left.table).length; i++) {
    let leftKey = Object.values(left.table)[i].head.value.key;
    let leftValue = Object.values(left.table)[i].head.value.value;
    for (let j = 0; j < Object.keys(right.table).length; j++) {
      let rightKey = Object.values(right.table)[j].head.value.key;
      let rightValue = Object.values(right.table)[j].head.value.value;
      if (leftKey === rightKey) {
        joinArr.push([leftKey, leftValue, rightValue]);
        break;
      } else if (j === Object.keys(right.table).length - 1) {
        joinArr.push([leftKey, leftValue, null]);
      }
    }
  }
  return joinArr;
}

module.exports = leftJoin;
