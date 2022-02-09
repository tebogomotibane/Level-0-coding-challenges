function getVowels(string) {
  const word = string.toLowerCase();
  const vowels = "aeiou";
  let holdVowels = [];

  for (let i in word) {
    if (vowels.includes(word[i]) && holdVowels.indexOf(word[i])<0) {//ignores duplicates
      holdVowels.push(word[i])
    }
  }
  console.log("Vowels:",holdVowels.toString());
}
