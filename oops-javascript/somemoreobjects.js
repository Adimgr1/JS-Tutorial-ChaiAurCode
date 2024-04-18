console.log(Math.PI)
const a=Object.getOwnPropertyDescriptor(Math,'PI',{ writable:true})
console.log(a)
// Object.defineProperty(Math, 'PI',{
//     writable: true,
//     configurable:true
// })
Math.PI=29
console.log(Math.PI)