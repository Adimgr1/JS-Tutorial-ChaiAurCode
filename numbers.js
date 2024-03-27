let a=34;
let b =a;
b= 100;
//console.log(a + " " +b);
let c = new Number(34);
let d = c;
c= new Number(100)
//console.log(c + " " + d);
//console.log(typeof d);
// object type of number is also behaves like pass by value or  primitive type;
//some functions of numbers.
//1. toString- returns string.
//2.tofixed- rounding off in decimal places
console.log(3.1.toFixed(4));// only take decimal numbers. argument counting starts after decimal value
//3 toPrecision - rounding off the numbers according to the argument. argument count starts with starting of number.
//console.log(3.999.toPrecision(2));

// ***********************Math*******************************************
//Math is a kind of library which gives us some mathmatical function.
//eg- Math.max, Math.min, 
console.log(Math.round(3.567)) // round function rounds the number into numbers not on decimal places.
// special function Math.random is used to provide some random number between 0 to 1;


