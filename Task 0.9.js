function getVowels(string) {
  var word = string.toLowerCase();
  let vowels = "aeiou";
  let holdVowels = "Vowels:";

  for (let i in word) {
    if (vowels.includes(word[i]) && holdVowels.includes([word[i]]) == false) {//ignores duplicates
      holdVowels += word[i];
    }
  }
  console.log(holdVowels);
}
