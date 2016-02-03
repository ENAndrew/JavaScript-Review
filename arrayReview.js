var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr) {
    return arr[arr.length - 1];
}

alert(last(threeItems));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

evenArray.forEach(function(item, i){
    if(item % 2 !== 0) {
        evenArray.splice(i, 1);
    }
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and 
//an array full or numbers 'randomArray'. Your job is to write a function that will 
//get a random number, then loop through the array to see if that random number is in the 
//array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function isItThere(arr) {
    var target = getRandomArbitrary();
    for(var i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            return true;
        }
    }
    return false;
}

isItThere(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0, first.length);

second.push(6, 7);

alert(first); //[1,2,3,4,5];
alert(second); //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

function longer(str) {
    var strArr = str.split(' ');
    var length = 0;
    var word;
    strArr.forEach(function(item){
        if(item.length > length) {
            length = item.length;
            word = item;
        }
    });
    return word;
}

longer(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str) {
    var strArr = str.split(" ");
    var capArr = [];
    strArr.forEach(function(item){
        item = item[0].toUpperCase() + item.slice(1);  //does not alter the original array?
        capArr.push(item);
    });
    return capArr.join(" ");   
}

capitalize(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

 
 function vowelCounter(str) {
    var vowels = {
         a: 0,
         e: 0,
         i: 0,
         o: 0,
         u: 0
    };
    var strArr = str.split('');
    var totalVowels = 0;
    

    for(var i = 0; i < strArr.length; i++){
        for(var key in vowels) {
            if(strArr[i] === key) {
                vowels[key]++;
            }
        }
    }
    
    for(var key in vowels) {
        totalVowels += vowels[key];
    }
    
    return totalVowels;
 }
 
 vowelCounter(theOdyssey);