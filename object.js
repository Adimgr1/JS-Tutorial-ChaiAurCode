// In javascript an object can be created without class.
// There are two ways to create object one literal and another way is by using constructors. Singleton object can be created using
// constructors.
const email= Symbol("email")

const js_User=  {
    name:"Aditya",
    mobNo: 8955163181n,
    add:"Munger, Bihar",
    [email]: "adimgr51@gmail.com",
    greeting: function(){
        console.log(`Hello ${this.name}`);
    }
}

//all the keys inside the constructors are being stored as string but we don't need to write it as string
/* there are two ways by which we can access any properties -
1. by dot
2.by using brackets but keys need to write as string inside the brackets.
*/

//console.log(js_User.name);
//console.log(js_User["name"])
//we know keys are only stored as string but we can also decleare keys as symbol. first we need to decleare keys
//as symbol then in brackets we have to initialize it inside object
//console.log(js_User[email])

//we can lock the object so that no change can haapen with object property as

//Object.freeze(js_User)
//console.log(js_User)
//console.log(js_User.greeting());
js_User.fatherName= "Ashwini Kumar Singh"

//console.log(js_User);

// Notes- In javascript after initiliazing the object we can add  new properties and functions to the object later .

// second way to create object is by using constructors - and these kind of object is called singleton objects.

// const b = new Object();
// b.name= "Aditya"
// b[2]="hello"
// console.log(b);

// we can also put object inside an object as value.

//merging two or more objects--

const a= {1:"a",2:"b",3:"c"}
const b = {4:"a",5:"c",6:"c"}
//const c= {a,b} // by this we are creating a new object which contains object a and object b. But they are not merged in
//single object.
//console.log(c)
//to merge two or more object in same objects we have two methods -
//1. Object.assign method and anothor one is  spread operation

//Object.assign(a,b);// so assign operation the first argument is target object and the next argument is source object 
// all the objects are mergeed with target and assigned in target object.
//console.log(a); // a is taget and a and b got merged and assigned in a.

// to asign in new onject. 
// const c= Object.assign({},a,b);
// console.log(c);

// spread operation -

// const d = {...a,...b}
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// **************************Methods of object******************
// Object.Keys and Object.values gives us keys and value in array.

// destructuring of object 

/* we know that to get or access any property we need to use . operator and name of that property.*/

const {name : naam} = js_User // by this we are creating an nwe variable naam which stores name property value.

console.log( naam);

//json object is like an object have keys and value in strings ans some time json data also comes in mixture of object and arrays.













