// Sum Zero: Runtime: O(n), space complexity: O(1)
let array = [1, 2, 3, -2]
let value = false;


for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}
console.log(value)

//Unique Characters: Runtime: O(n) 
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  console.log(hasUniqueChars("Monday"))

  //Pangram: Runtime: o(n)
  function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram("I like cats, but not mice"))


//Longest word: Runtime: O(n log(n))
function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(findLongestWord("hi, hello"));
