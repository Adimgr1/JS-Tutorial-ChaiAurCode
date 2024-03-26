const a = "Hello"
b=a;
b="Helllo"
console.log(a)
console.log(a.substring(0,1));
//we we initialize any string like this than with new keyword than an object is created then the data type is object in
//that case. Strings are immutable and if once defined cant be modified. That's why the object type of string which we can
// create using new keyword don't show pass by reference properties.
b= new String("Hello")
c=b;
c= "Abc"
console.log(typeof b);
const newString = "   Hitesh"
console.log(a)
a[0]="a"
console.log(a);

