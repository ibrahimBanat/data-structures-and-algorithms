"use strict";

function repeatedWord(parag) {
  const words = parag.split(/[\s,]+/);

  let array = [];

  for (let word = 0; word < words.length; word++) {
    let lowerWord = words[word].toLowerCase();
    const isContain = array.includes(lowerWord);

    if (isContain) return lowerWord;
    array.push(lowerWord);
  }
  return "no duplicate words!";
}

module.exports = repeatedWord;
