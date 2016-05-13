/**
 * Created by conor b on 5/13/16.
 */


// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Function to update the record collection
function updateRecords(id, prop, value) {
    if (value !== "") {
        if (prop === "tracks") {
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = value;
        }
    } else {
        delete collection[id][prop];
    }

    return collection;
}

// Alter values below to test code
console.log(updateRecords(5439, "artist", "ABBA"));

