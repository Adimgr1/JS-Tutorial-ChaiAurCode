let a= new Number(20);
let b =new Number(34);

function swap(a,b){
    var temp =a;
    a=b;
    b=temp;
    console.log(a,b);
}

swap(a,b)
console.log(a,b);
// whnever we pass or try to copy any premitive type things only copy of value get passed not the reference.