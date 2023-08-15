function isPalindrome(word) {
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}

/* 
  Add your pseudocode here
  1. convert the string into parts where if the word can be spelled the same way fowards and backwards it will return true
  2. if the word is a palidrome than it will return true
  3. otherwise the word is false
*/

/*
  Add written explanation of your solution here
  - by converting the string and seperating the words than the function will analyze each word to see if it meets the requirements.
    It will then determine whether or not the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
