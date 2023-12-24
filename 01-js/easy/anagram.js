/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Count letters of str1
    let countOfLetters = {};

    for(let i=0; i<str1.length; i++){
      if(countOfLetters[str1[i]])
        countOfLetters[str1[i]]++;
      else countOfLetters[str1[i]] = 1;
    }

    console.log(countOfLetters)
    // check letters of str2 if they exist in str1 or more in numbers 
    for(let i=0; i<str2.length; i++){
      if(countOfLetters[str2[i]]){
        countOfLetters[str2[i]]--;
        if(countOfLetters[str2[i]] < 0) return false;
      }
      else return false;
    }

    // one case where every letter of str2 present in str1 
    // but may be str1 having more letters than str2
    for (const key in countOfLetters) {
        if(countOfLetters[key] != 0) return false;
    }

    return true;
}

module.exports = isAnagram;
