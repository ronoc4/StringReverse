/**
 * Created by conor on 6/6/16.
 */

var str = "This is a string to slice";

var finalSlice = str.slice(3, -2);

console.log(finalSlice);


function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);

    args.splice(0,1);

    return args;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));