console.log('Cardio1: I am ready');
// Refernce cardio problems from
// https://www.youtube.com/watch?v=M2bJBuaOeOQ&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G
// To run file: open browser http://localhost/JSWork/arrayCardio/index.html
// make sure you have browser-refresh-on-save plugin installed in atom for auto refreshes
let companies = [
  {name: 'IBM', established: 1978, size: 'big'},
  {name: 'Chevron', established: 1962, size: 'big'},
  {name: 'Google', established: 2001, size: 'big'},
  {name: 'Amazon', established: 2008, size: 'big'},
  {name: 'Facebook', established: 2002, size: 'medium'},
  {name: 'Apple', established: 1998, size: 'medium'},
  {name: 'slack', established: 2011, size: 'size'},
];

let people = ['Verma, Richa',
              'Bansal, Rishi',
              'Gupta, Kamlesh',
              'DeSouza, Claudio',
              'Smith, Jack',
              'Thomas, Nick',
            ];

// Filter companies after 2000
let getRecentCompanies = function(companies){
  return companies.filter(function(company) {
    return company.established > 2000 ? true : false;
  })
};

console.log(getRecentCompanies(companies));

//Challenge: Reverse String
// ex. reverseString('hello') === 'olleh'
let reverseString = function(string) {
  return string.split('').reverse().join('');
}

console.log(reverseString('Akshay Verma'));
console.log(reverseString('Mr.Rakesh ; Bansal'));
console.log(reverseString('hello'));


/*******************************************************************/

// Challenge 2: isPalindrome
// Return true if Palindrome, false otherwise
// racecar is a palindrome, richa is not
let isPalindrome = function(str) {
  str = str.toLowerCase();
  let strArray = str.split('');
  let revStr = strArray.reverse().join('');
  return str === revStr ? true : false;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('2020'));
console.log(isPalindrome('515'));
console.log(isPalindrome('richa'));
console.log(isPalindrome('Ana'));

// Challenge 3: Reverse an Integer
// e.g. reverseInt(125) ==> 521
let reverseInt = function(int) {
  return int.toString().split('').reverse().join('');
}

console.log(reverseInt(123));
console.log(reverseInt(515));
console.log(reverseInt(672));

//Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capital
// e.g. i love javascript ==> I Love javascript
let capitalizeLetters = function(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray.map( (word) => word.charAt(0).toUpperCase() + word.substr(1)).toString();

}
console.log(capitalizeLetters('i love javascript'));

// Challenge 5: Max Characters
// Return the character that is most common in a string
// e.g. maxCharacters('javascript' ==> a)
let maxCharacters = function(str) {

}
