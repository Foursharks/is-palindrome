
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

// // Write your code below
//Four letter palindrome - noon
//five letter palindrome - racecar

function checkPalindrome(word) {
    // let firstHalf = word.slice(0,word.length/2)//put the first half in its own string
    // let secondHalf = word.replace(word[Math.floor(word.length/2)],``).slice(word.length/2)//discard the middle letter //put the second half in its own string
    // console.log(secondHalf); 

    // comprare the first half of the word with the last half of the word
     for(i=0; i<word.length/2; i++){
        if(word[i] !== word[word.length-1-i]){
            return false; 
        }
     }
     return true; 
}

console.log(checkPalindrome(`racecar`))