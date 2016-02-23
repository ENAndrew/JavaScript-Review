/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr) {
    var sum = 0;
    arr.forEach(function(item){
       sum += (item + 1); 
    });
    return sum;
}

plusOneSum([1, 2, 3, 4]); // 14               //CORRECT OUTPUT

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
function flatten(arr) {                       ///Has to be a better way to do this, only works when depth known.
   var flatArr = [];
   arr.forEach(function(item) {
      if(typeof item === 'number') {
          flatArr.push(item);
      } else {
          item.forEach(function(e){
              if(typeof e === 'number') {
                  flatArr.push(e);
              } else {
                  e.forEach(function(j){
                      if(typeof j === 'number') {
                          flatArr.push(j);
                      }
                  });
              }
          });
      }
   });
   return flatArr;
}

flatten([1, 2, [3, [4], 5, 6], 7]); // [1, 2, 3, 4, 5, 6, 7]   //CORRECT OUTPUT


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
function numSort(arr) {
    
}

var mixArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numSort(mixArray);

/*

There is an array of non-negative integers. A second array is formed by shuffling 
the elements of the first array and deleting a random element. Given these two arrays, 
find which element is missing in the second array.

*/

function missing(arr1, arr2) {
    var sortObj = {};
    var stringArr = arr2.toString().split(',');
    arr1.forEach(function(item) {
        sortObj[item] = 0;
    });
    stringArr.forEach(function(item) {
        for(var key in sortObj) {
            if(key === item) {
                sortObj[key] += 1;
            }
        }
    });
    for(var key in sortObj) {
        if(sortObj[key] === 0) {
            return parseInt(key);
        }
    }
}

var first = [3, 45, 6, 12, 9, 20];
var second = [3, 6, 12, 9, 20];

missing(first, second);                     //CORRECT OUTPUT


/*

Write a function that returns the longest word(s) from a sentence. The function should not return 
any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
function longestWords(str) {
    var strArr = str.split(' ');
    var lowArr = [];
    var testObj = {};
    var length = 0;
    var resultArray = [];
    strArr.forEach(function(item){
        lowArr.push(item.toLowerCase());
    });
    lowArr.forEach(function(item){
        testObj[item] = item.length;
    });
    for(var key in testObj) {
        if(length < testObj[key]) {
            length = testObj[key];
        }
    }
    for(var key in testObj) {
        if(testObj[key] === length){
            resultArray.push(key);
        }
    }
    return resultArray;                     //CORRECT OUPUT
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
function sumMultiples(num) {
    var total = 0;
    for(var i = 0; i < num; i++)
        if(i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    return total;
}

sumMultiples(1000);                          //CORRECT OUTPUT


/*

Remove duplicate characters in a given string keeping only the first occurrences. 
For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function killDupes(str) {
    return str.split('').filter(function(x, n, s){return s.indexOf(x) === n;}).join('');
}

killDupes('tree traversal');    //CORRECT OUTPUT


/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5    //this is not a function invocation?

*/

function sum() {
    var args = [].slice().call(arguments);  //does this work?
    var total = 0;
    args.forEach(function(item) {
        total +=item;
    });
    
    return total;
}