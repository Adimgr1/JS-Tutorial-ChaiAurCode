// this keyword is used to refer the current context which is about object so this holds the object, so this will only work 
//in the object.

const a = {
    name: "aditya",
    value: function(){
        return this // referring a which is current object.
    
    }

}
console.log(a.value());

/* note- this can only work inside the object because this refers current object. */

// Arrow Functions - a different way to define function.

const b = () => {


} // this is the basic syntax of arrow function.

// In arrow function we can do implicit return by -

const add= (a,b) => (a+b)
