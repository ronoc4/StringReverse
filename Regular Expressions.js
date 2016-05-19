/**
 * Created by conor on 5/19/16.
 */


//This will find the number of times a word occurs in a given string
var testString = "The cow jumps over the brown dog, on a Sunday afternoon, against the Summer air. What a thing of beautiy it was.";

var splitWord = testString.split(" "); //Split the string by whitespace

var checkString = /cow/gi;

var count = testString.match(checkString).length;


//Split word will find index of string to locate the word
console.log("Number of times a " + splitWord[1] + " appears: " + count);

//This will find the number of times a word occurs in a given string
var newString = "Programming bootcamps seem to make an impossible claim. " +
    "Instead of spending four years in university, they say, you can learn how to be a software engineer in a three month program. " +
    "On the face of it, this sounds more like an ad for Trump University than a plausible educational model."

var checkingString = /it/gi; //The word in between the /WORD/ will be checked in the string. 'g' stands for global, 'i' is ignore case

var counter = newString.match(checkingString).length;

splitWord = newString.split(" ");

console.log("Number of times " + splitWord[35] + " appears: " + counter);


//This will find numbers in Regular Expressions
var numberCounterString = "There are 3 cats but 4 dogs.";

var expression = /\d+/g;  // \d is used to retrieve one digit (e.g. numbers 0 to 9) in a string.

// This code counts the matches of expression in whiteSpaceString
var digitCount = numberCounterString.match(expression).length;

console.log("Number of times a number appears in string: " + digitCount);


// This will find the number of white spaces in the string
// The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed)
var whiteSpaceString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expressionWhite = /\s+/g;  // Change this line


// This code counts the matches of expression in whiteSpaceString
var spaceCount = whiteSpaceString.match(expressionWhite).length;

console.log("This is the number of times white space appears: " + spaceCount);