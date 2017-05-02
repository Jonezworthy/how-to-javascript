/*
 +-------------------------------+
 |                               |
 |   +----+    +---+   +-----+   |
 |   |        +        |         |
 |   |        +        |         |
 |   +----+    +--+    +-----+   |
 |   |             +         |   |
 |   |             +         |   |
 |   +----+   +---+    +-----+   |
 |                               |
 +-------------------------------+
 |             OBJECTS           |
 +-------------------------------+
 */

////EVERYTHING IS AN OBJECT
////NOT EVERYTHING'S VALUE IS AN OBJECT

////To clarify: everything is an object, everything has methods and properties associated with it
////Datatypes still exist - values of the object do differ

////Object Literal
var oExampleObject = {
    property: true
    , method: function () {
        return 'hi';
    }
};

//console.log(oExampleObject.property);
//console.log(oExampleObject.method());

////You can only use the "new" operator on true objects which are made by functions

var exampleFunctionObject = function (abc) {
    ////this empty space part works like the constructor

    this.method = function () {
        return 'oop';
    };
    this.property = 123;
};

//var oExampleObject2 = new exampleFunctionObject('abc');
//oExampleObject2.method();
//
//console.log(oExampleObject2.method());
//console.log(oExampleObject2.property);

/*
 +-------------------------------+
 |                               |
 |   +----+    +---+   +         |
 |   |        +        |         |
 |   |        +        |         |
 |   +----+    +--+    +-----+   |
 |   |             +   |     |   |
 |   |             +   |     |   |
 |   +----+   +---+    +-----+   |
 |                               |
 +-------------------------------+
 |           FUNCTIONS           |
 +-------------------------------+
 */

class exampleClass {
    constructor() {
        ////Properties can't be directly defined as part of the class
        console.log('Class construction');
        this.property = 'howdy';
    }
    method() {
        return 'classes are awesome';
    }
}
////Basic inheritance
class otherClass extends exampleClass {

    method(){
        return super.method();
    }
};
//var oExampleObject3 = new exampleClass();
//oExampleObject3.method();
//console.log(oExampleObject3.method());
//console.log(oExampleObject3.property);

//var oOtherClass = new otherClass();
//console.log(oOtherClass.method());
//////////////////////////////////////////////////
//                                              //
//                                              //
////  Some useful built in Objects (ES5 + ES6)////
//                                              //
//                                              //
//////////////////////////////////////////////////

////Math object 
Math.random(); ////Random decimal number
////To achieve a 0 - 10 random number, just multiply it by 10
//console.log(Math.random() * 10);

////To remove decimal places, or reduce decimal places, you can use the toFixed method
//console.log((Math.random() * 10).toFixed(2)); //2 decimal places
//console.log((Math.random() * 10).toFixed(0)); //No decimal places

////There are many Mathematical operations available via the Math object
////Notable methods:
////min - finds the lowest value in an array
Math.min(13,12,17,20,374,273,3,28,182); //3
////max - finds the lowest value in an array
Math.max(13,12,17,20,374,273,3,28,182); //374
////floor - like PHP floor, rounds down to the lowest whole number
Math.floor(1.5); //1
////ceil - like PHP ceil, rounds up to the highest whole number
Math.ceil(5.2); //6
////round - rounds to nearest whole number - greater than .5 UP
Math.round(1.2); //1
Math.round(1.6); //2

////Date object
////The date object has getters and setters for all of the common date units
////Milliseconds, seconds, minutes, hours, days, months, years

new Date(); //This will create an object with the current date/time
//console.log(new Date());
var oDate = new Date();
//console.log('Current time:');
//console.log(oDate.getHours() + ':' + oDate.getMinutes()); //Current time

////Scenario - Lets say you want to know what time it will be in 130 minutes
////We do that by getting the current amount of minutes we are into this hour, then increasing it by 130

oDate.setMinutes( oDate.getMinutes() + 130 ); //Setting the dates minutes to be its current, plus 130

//console.log('In 130 minutes');
//console.log(oDate.getHours() + ':' + oDate.getMinutes()); //Future time!

////To get a unix timestamp, you can use the valueOf method 
oDate.valueOf();
//console.log(oDate.valueOf());

////toISOString is useful if you need a date format that SQLServer likes
//console.log(oDate.toISOString());
