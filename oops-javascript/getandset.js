class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get password(){
        return this._password + " yay"
    }
    set password(value){
        this._password=value + 30

    }
}

const user1= new user('adi','123')
console.log(user1.password)