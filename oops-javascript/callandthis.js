// ************************call****************************************
/* as we have seen in the prototype that when any function is decleared inside a function than it is called but 
after execution the execution context of that function goes away from stack memory .

*/
let a;
const eg2 = function(){
    console.log('called')
    a=20
    b=60
}
const eg= function(){
    console.log('Hello')
    let b;
    eg2()
    console.log(b)
}
eg();
console.log(a)
console.log(b)

function setName(name,add){
     this.name=name
}
function user(name,email,phno){
    this.email=email,
    this.phno=phno,
    setName.call(this,name) //  this inside the setname function has no relevence with this in user function so we need to pass
    // this so that value is got set inside the current obj.
}

const user1= new user("Aditya","Hello@meta.com","8955163181")
console.log(user1)
