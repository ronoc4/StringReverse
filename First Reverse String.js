/**
 * Created by conor on 4/22/16.
 */

function FirstReverseString(str) {

    var finalString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        finalString += str.charAt(i);
    }

    return finalString;

}

console.log(FirstReverseString("I am a string to be reversed"));
