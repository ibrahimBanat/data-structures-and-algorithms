"use strict";

function repeatedWord(paragraph) {
  const words = paragraph.split(/[\s,]+/);

  let array = [];

  for (let word = 0; word < words.length; word++) {
    let word = words[word].toLowerCase();
    const isContain = array.includes(word);

    if (isContain) return word;
    array.push(word);
  }
  return "None repeated Words";
}

module.exports = repeatedWord;
