/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.*/

function palindrome(str) {
    str = str.toLowerCase();
    let arr = str.split("");
    arr = arr.filter(char => char.match(/^[0-9a-zA-Z]+$/));
    console.log(arr);
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
      if(arr[i] !== arr[j]){
        return false;
      }  
     }
    return true;
  }
  
  palindrome();