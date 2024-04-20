function parent(value) {
    value=10;

    function child(){
        console.log(value);
    }

    child()

    
}

parent(10)

function parent1(){
    let a= 25;
     function child2(){
        console.log(a)
     }
     child2()
}

parent1()

// Lexical scoping means the variables inside the one function is accessable to other child functions of it.

function parent2(){
    let a= 29;
    return function(){
        console.log(a)
    }

}

parent2()() // so here the lexical scope of the parent function also returns with the child function which parent function
// is returning that's why we can see that "a" is printing because 'a' only have existance in the parent function and that is 
// called closure.




