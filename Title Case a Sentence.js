/**
 * Created by conor on 6/3/16.
 */


// This is a program to capitalize the first letter in each word

function titleCase(str) {

    var words = str.toLowerCase().split(" "); //Split the string by the white space into an Arry

    for(var i = 0; i < words.length; i++){ // word.length holds the number of occurrences of the array
        var letters = words[i].split("");  // splits the array occurrence into an array of letters
        letters[0] = letters[0].toUpperCase(); //Sets first letter to uppercase
        words[i] = letters.join(""); //join together the letters back into words
    }

    return words.join(" "); // coverts back into a sentence
}

console.log(titleCase("I'm a little tea pot"));
