function getCommomCharacters(word1, word2) {
  let commonLetters = [];
  for (let char in word1)
    if (
      word2.includes(word1[char]) &&
      commonLetters.includes([word1[char]]) == false // ignores duplicates
    ) {
      commonLetters.push(word1[char]);
    }
  console.log("Common letters:", commonLetters.toString());
}
