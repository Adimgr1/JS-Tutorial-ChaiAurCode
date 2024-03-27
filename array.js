// array in js are resizeable . array can contains elements if multiple data types in js.

var a;
a=[1,2,3,4,5]
var b = [6,7,8,9,10]
//accessing array through index
//console.log(a[0]);
// ******Methods in Array *****
//adding elements in array at last position
//console.log(a.push(23));
//console.log(a)
//pop remove the last ements of the array.
//unshift- add elements on the starting of the array
//a.unshift(23)
//console.log(a);
//a.shift() // shift method used to remove elements from start
//console.log(a)

//slice vs splice

//slice- gives me the subarray from the main array but there is nothing changed in main array.
//console.log(a.slice(2,4))
//console.log(a);
// splice - gives me subarray which takes three arguments one is the start from where we want our subarray and second is how
// many elements after that index starting point and third arguments is what fit in removed elemenyts in main array  .
//console.log(a.splice(2,3,6,7,8)) 
//console.log(a);


//****************************** Merge Arrays *********************************

//push - we know that push insert the elements last inside the array so if we use push an array inside an array then it will 
// push the whole array inside that array 

//a.push(b)
//console.log(a);

//concat - it returns new array combination of two arrays.
//c =a.concat(b)
//console.log(c)
// but concat have one limitations which is it only merge two arrays but what when we have two arrays.
//for this we have spread operation on array- merges two or more array and returns it in new array.
//d = [...a,...b,...c]
//console.log(d);

//flat method - returns new array after merging all different kinds of array and take depth as argument

// var c= [1,2,3,[4,5,6],8,9,10,[11,12,13,[14,15,[16,17]]]]
// console.log(c.flat(5));

//converting different data types into array.

//Array.from()- argument takes target value which need to be converted into array.

var d = "100";
var e = "200"
console.log(Array.from(d))// not accepts two arguments. not able to convart number into arrays.

//Array.of()- can accept multiple arguments and convert it into elements of new array

console.log(Array.of(d,e));






