//switch

// const month = 6;
//  switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;

//     default:
//         console.log("Please put between 1 to 3");
//         break;
    
//  }
 // we have to put break after every case beacuse if any case got true than every case after that will be executed with that 
 //particular case so to prevent from such situation we put break;
 //default can also work without break;

 //console.log(29);

 // ****************************Complicated Concepts ***************************************

 //truthy and falsy values.

 //we know that conditionals statement works on boolean values either true or false. but some time some values are automatically
 // considered as true or false.

 const a = 1
 if(a){
    console.log("hEello");
 }else{
    console.log("no");
 }

 //flasy = 0,-0, 0n(BigInt), "",'',null,undefined, NaN
 // all others are truthy.

 // nullish coalescing operator (??) used with null and undefined

 let b=19;

 b=b??10;
 console.log(b);
 // used when value is null or undefined. suppose if value is something than ok but if it is null or  defined
 // do something other with that .






