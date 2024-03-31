for (let i = 0;i < 20;i++) {
    //console.log(i);
    
}

let a= [0,1,2,3,4,"Hitesh"]
for(let i=0;i<a.length;i++){
    //console.log(a[i]);

}

// ************************************Special Loops **********************************************************

//for of


for (const iterator of a) { // iterator moves inside array and have values of elements in array.
    //console.log(iterator);
    
}

// we can apply forof loop to any kind of objects(array,strings,map)

//map- holds key and value pair.
 const m= new Map();
 m.set("Aditya", "Kumar")
 m.set('Parveen','Khesri')
 m.set('Arjit','singh')

 // itrating through map;

//console.log(m.values())
//console.log(m.get("Parveen")) // gives us values for keys.
for (const [iterator] of m) { // iterator holds the keys of map- if we directly print it gives us array of keys and
    //value pair and if we put iterator in brackets it gives us only keys.
    console.log(iterator);
}
for (const [iterator,iterator2] of m) { // in previous example we have seen that if we use iterator in block it gives us 
    //keys but if we jave two variables inside the brackets then one will hold keys and ither will hold value.
    console.log(iterator)
    console.log(iterator2)
    
}

//forof not applicable on objects.

