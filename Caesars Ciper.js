/**
 * Created by conor on 6/9/16.
 */



function rot13(str, num) {
    //Create array with all letters plus 13 more past 'Z'
    var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];

    var finalArray = [];

    //Iterate through array, and store into newArray
    for(var i = 0 ; i < str.length; i ++) {
        var newArray = abc.indexOf(str[i]) +13;
        //Check to see if the index exists in 'abc'
        if(abc.indexOf(str[i]) === -1) {
            finalArray.push(str[i]); //if so add to finalArray
        } else {
            finalArray.push(abc[newArray]);
        }
    }

    //Join the string back together 
    return finalArray.join('');
}


console.log(rot13("SERR PBQR PNZC", 13));