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

////Basic object definition

////Object Literal
var oExampleObject = {
    property: true
    , method: function () {
        return 'hi';
    }
};

//console.log(oExampleObject.property);
//console.log(oExampleObject.method());

////You can only use the "new" operator on true objects which are made by functions/classes

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

////RegExp Object is useful if you need to variablise some regex
////So typically, this is a normal regex to find the word hello at the start of a string
var rFindHello = /^hello/i;
////If you needed this but with a variable word instead, you use the RegExp object
//// 2 args - 
////1st -> your regex 
////2nd -> Additional flags
var word = 'hi';
var rFindWord = new RegExp('^' + word, 'i');

//console.log(rFindHello);
//console.log(rFindWord);

////To find out more on RegExp - see regex.js

////These have little to no support in IE - should keep them in NodeJS really

////--- Set object
////a set is basically an UNIQUE array, but easier to manage
////I will use array terminology to describe the methods
var set = new Set();
////To push you use the add method
set.add('hello');
set.add('abc123');
set.add(101);

//console.log(set);

////To check to see if the value exists
//console.log(set.has('hello'));
////To splice out an element
set.delete('abc123');

//console.log(set.size); //Instead of length

//console.log(set);

////To check the length, use the size property
//console.log(set.size);

////To loop over it, you need to use the of keyword
for (let item of set){
//    console.log(item);
}
////--- Map object
////a map is basically an object, but easier to manage
var map = new Map();
map.set('key', 'value');
map.set('callback', ()=>{});

//console.log(map.size); //Instead of length
////Map loops
////These loops make using Maps very attractive
for (let [key, value] of map){
//    console.log(key + ':' + value);
}

////--- WeakSet
////TDLR: In essence, a weakset is a set that will only set objects
////--- WeakMap
////TDLR: In essence, a weakmap is a map that will only set objects
////Feel free to read more about WeakSets/WeakMaps but they aren't hugely helpful in my opinion