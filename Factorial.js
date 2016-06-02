/**
 * Created by Conor on 6/2/16.
 *
 * This program will find the factorial of a number
 */


function factorial(num) {
    if ( num < 0 ) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorial(num -1));
    }

}

console.log(factorial(5));