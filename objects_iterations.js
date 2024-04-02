// to iterate through objects we should use for-in loop.

const obj= {
    name:"Aditya Kumar",
    roll : 60074,
    sub:"E.C.E"
}
const mp= new Map();
mp.set("name","Aditay")
mp.set("roll",60074)
for (const key in obj) { // key- a variable in for in loop holds only keys for objects
    //console.log(key);
}

//in array for in loop only gets the index of the array.

// special array loop - forEach

const a= [1,2,3,4,5,6,7,8,9]
// for each function gives three values Value, Index, Array.

a.forEach(function hello(value){
     //console.log(value);
})
// so forEach function provide us three values and we can use all these valus by taking arguments in function which we need to
//provide inside the foreach function.
//a type of function is being called inside the function as an argument is called callback function.

//for each loop don't return any value.
//but filter function return values.

//console.log(a.filter((num)=>(num>4 && num<6))) // filter returns the values according to the conditions in function.
//console.log(a.map((num)=>(num>4 && num<6))) // map functions returns the values of array in array according to the operations
// on array elements 







