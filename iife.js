// IIFE - Immidiately Invoked Function Expression.

// IIFE is used when we want a function which needs to be directly called after initialization and the second thing is we don,t 
//want a function have pollution due to global scope then we use IIFE
//syntax-

(function(){
    console.log('Hello')
})()

//Array Function-

(()=>{
    console.log("Hello");
})()

// one thing to note that when we write iife than a function don't know when to stop after invoking and think that the next function
//is actually the argument of first iife and throws error.
//then we need to add semicolon . It is used whem we have two iife consecutively.


