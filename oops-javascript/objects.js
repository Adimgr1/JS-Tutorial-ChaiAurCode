// objects contains some method and properties and these properties are actually a variables inside the objects

// objects literals

// const obj= {
//     name: "Aditya",
//     print: (this.name) // one thing is we can't use this context here . only inside some function
//     // related to this opjects this method can be used.
// }
// console.log(obj.name)

// in all enviroment there is one global object.

function user(username,age,roll){
    this.username=username
    this.age=age
    this.roll=roll
    return this // here this is referred to global object
}
// here when we wrote this function than this function behaves like an method of global object. but when
//we genrally write new that this function is going to behave like a class and new object is being created 
//which becomes instance of this function

function exam(){
   //this.username= "Hello"
}
//note- but when you create the function and want to use as class or parent object than just pass new keyword 
// with it as I have done below.
const eg1= new exam()
eg1.name= "aDIYTYA"
console.log(eg1)



const userone= user("Aditya",24,60074)
//console.log(userone)

// constructor function - new keyword is use to create a new object or instance of a previous 
// decleared object and that instance can have all the properties and functionalities of that previous object
