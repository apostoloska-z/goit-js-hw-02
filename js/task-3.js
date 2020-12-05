
const findLongestWord = function(string) {
  const word = string.split (' ');
  let longestWord = word[0];

  for (let i = 1; i < word.length; i += 1) {
      if (word[i].length > longestWord.length) {
        longestWord = word[i];
      }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you'));

