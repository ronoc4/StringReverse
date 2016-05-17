/**
 * Created by conor on 5/17/16.
 */

//Setup object
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

    for(var i = 0; i < contacts.length; i++) {
        if(firstName === contacts[i].firstName) {
            if(contacts[i].hasOwnProperty(prop)) {
                return console.log(contacts[i][prop]);
            } else {
                return console.log("No such property");
            }
        }
    }
    return console.log("No such contact");


}

// Change these values to function
console.log(lookUpProfile("Akira", "likes"));