/**
 * Created by conor on 6/3/16.
 */



function findLongestWord(str) {
    if (str === null) {
        return 0;
    }

    //Split string on whitespace
    var longest = str.split(" ");


    //Sort from longest word to shortest
    longest = longest.sort(function(a,b) {
        return a.length - b.length;
    });

    //Remove the longest word from Array and store
    var stringLongest = longest.pop();

    return stringLongest;
}
var stringUser = "The quick brown fox jumped over the lazy dog";

console.log(stringUser);
console.log("Longest word in string is: ", findLongestWord(stringUser));
