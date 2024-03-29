// functions are block of code which performs some tasks and we call it as many time as we want.
function greeting(name){
    console.log(`Hello ${name}`);
}

//greeting("Aditya");
console.log(greeting("Aditya"));


function sum(a,b){
    return a+b
}

console.log(sum(false,5,10,122));
// if you dont pass parameter but if my function accepting parameter than it will say undefined at the place of parameter 
// if function is not returning something or it directly printing something than inside console log it says undefined.
// one thing is if function accepts some parameters and we put more parameters than still it run by taking the required parameter.


// when we don't know the number of arguments then we used rest operator and it takes all the argumebts and bind it into array

function any(...num){
    return num;
}

console.log(any(200,3000,400));



// if we want we can directly initialize object and array inside the function.

const user = {
    name: "Aditya",
    roll: 29
}

function hello(one){
    one.name= "Aditya Kuamr"
    console.log(one.name);
}

hello(user)
console.log(user);