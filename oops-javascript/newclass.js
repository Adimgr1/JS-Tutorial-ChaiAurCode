class user{
    constructor(username){
        this.username=username
    }
    static log(){
        console.log(`username : ${this.username}`) // static used to restrict the objects to take this property.
    }
}

// function user(username){
//     this.username=username,
//     this.log=function log(){
//         console.log(`username : ${this.username}`) // in this constructor function we need to hold the methods in variable
// and than attach it to the current context using this .
//     }
// }

const user1= new user("Aditya")
console.log(user1)
//user1.log()

class Teacher extends user{
    constructor(username,email,id){
        super(username) // this super pass this username to the parent class with current context
        this.id=id,
        this.email=email
    }
}

const te1= new Teacher("Aditya",'adimgr51@gmail.com','123')
console.log(te1)
//te1.log()
user.log()