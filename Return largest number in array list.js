/**
 * Created by conor on 6/5/16.
 */



function largestOfFour(arr) {

    // creating blank array with four elements

    var max = [0,0,0,0];
    for(var i = 0; i < arr.length; i++){  //Loop through outer array elements
        for(var j = 0; j < arr[i].length; j++) { //loop through inner array elements
            if(arr[i][j] > max[i] ) { //find largest number in the array
                max[i] = arr[i][j]; //store them into variable
            }
        }
    }

    return max;
}

console.log("Largest number in each of the provided array: " +
    "[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] is: ", largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));