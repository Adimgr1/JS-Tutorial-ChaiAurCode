//date is an object type which give us current date and time-stamp from midnight of jan 1 1970;

// console.log(new Date ());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());
// var a = new Date();
// console.log(a.getDay());

// new Date() creates the date object which contains date and time in universal time zone.

var a = new Date("2023-3-1") // by this we can create the date of our own choice.
//console.log(a.toString());

var b = new Date(2023,13,13) // also method by which we can create date. here month count starts from  0
// start input yyyy-mm-date. month can't be start from 0.
//console.log(b);

var c = new Date()// argument says the millisecond from that refrence time.
var c = c.toLocaleString("default", {
    timeZone:"IST"
})
// console.log(c.toLocaleString(
//     "default",{
//         timeZone:"IST" // give timezone specific time
//     }

// ));
console.log(c);


 