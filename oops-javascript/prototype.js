const a= {
    name: 'Aditya'
}
Object.setPrototypeOf(a,{
    greet:function() {
        console.log("Hello My name is " + this.name) // this is one method by which we can add prototype in object literals
    }
})

//console.log(a.prototype);

// javascript is prototype language. all the things in this language is object and all the object have some prototype.

// prototype can be inserted in any object through object constructor function.

//eg-----

const cons= function(name,roll){
    this.name= name,
    this.roll= roll,
     this.giveroll=function(){ // to directly add some functions inside an constructors we need to add this because 
        //to ensure that the particular method is applicable to each instance of this constructors.
        console.log(this.roll)
    }
    
}
cons.prototype.address=function(){
    this.address= "Subhash Nagar"
}

const cons1= new cons("Aditya Kumar",60074)
cons1.address()
console.log(cons1)
cons.prototype.greet=function(){
    console.log(`Hello ${this.address}`)
}
cons1.greet()
// we can add prototype inside a an constructor function

cons1.giveroll()

function c(){
    console.log("Hello")
    function b(){
        console.log('Aditya')// when we call one function c() automatically b() is not getting called that's why when
        //the constructors functions have different methods as prototype or directly
    }
}

// ************************ Inheriting properties of Different objects********************

//we can do this by adding different object as prototype of one object 

const user={
    name: 'Aditya',
    address: "Munger"
}

const student={
    college: 'BIT',
    roll:60074
}

// Now we want that user should have the properties of student. so we add student in user prototype.

user.__proto__= student
const fun= function(){
    console.log("Hello there")

}

console.log(user.college)
Object.setPrototypeOf(user,{fun})// to directly set any method inside an object literals 
console.log(user.__proto__)
user.fun()




// so the most important thing is to note that directly assign the prototype in an object we can do use .__proto__ 
// or object.setPrototypeOf() by these methods we can inherit things from different objects.