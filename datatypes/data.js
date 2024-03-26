"use strict"; //treat all js code as newer version
//alert(3+3) // we are using nodejs, not browser

var a= "Hello"
var b = 22.45;
var c = 2.0000017637831;
var d = true
var e;
console.log(typeof a + " " + typeof b + " " +typeof c + " " + typeof e);
null // not a type but a value or object;
undefined // a type. variables whose value is not initialized  is of type undefined.
Symbol // used in react to give uniqueness to the componenets;

// primitive data types -
//  numbers - integers and decimals both are of number types
// number data type have some capacity if it crosses that then we have bigint.
//  String
//  Boolean
//  Symbol
//  undefined

//then we have object data type

// object data types are pass by reference type of data .
//function is also of a function object type they all follow call by reference thing.
//primitive data types stored in static and static data is only pass by value means the copy of data is created
// inside the stack memory
