/**
 * Created by conor on 6/8/16.
 *
 * Protoype example
 * https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
 */

//Create new Circle object with 1 property of radius
var Circle = function (radius) {
    this.radius = radius;
};

//augment Circle's default prototype property thereby augmenting the prototype of each generated instance
Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius; //Calculate the area of the circle
};

//Create new instance of Circle object
var a = new Circle(3), b = new Circle(5);

var areaA = a.area().toFixed(2); //Number of decimal points
var areaB = b.area().toFixed(3);

console.log(areaA, areaB);

