# hashmap repeated word Summary

Find the first repeated word in a book using hash maps.

## Whiteboard Process

![](../assets/hashWords.jpg)
[better view](https://miro.com/app/board/o9J_l9WIhgk=/)

## Approach & Efficiency

- time complixety -> O(n)
- space complixety -> O(n)

## Solution

```javascript
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
```
