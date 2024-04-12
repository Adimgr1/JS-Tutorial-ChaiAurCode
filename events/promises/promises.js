// promise are a kind of object which represents eventful operations. Some fuctions which need to be executed asynchronously
// can be executed under promise
//promise does-
//async task, DB calls, Cryptography
// const a= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello");
//         resolve() // resove method is called here which connects with then when promise completed then
//         // it gives it value back to then.
//     },2000)

// })

// const b=a.then(()=>{
//     console.log("promise consumed");
// })

// // resolve also pass some data to then as when promises completes. we need to pass that data to the argument in resolve

//  new Promise(function(resove,reject){
//     setTimeout(()=>{
//         resove('Aditya')
//     },1000)

// }).then(function(a){
//     console.log(a);

// })
// resolve got trigger when function executed.
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         const error= true
//         if(!error){
//             resolve('Aditya')

//         }else{
//             reject("Hello")
//         }
//     })
// }).then((resolve)=>{
//     console.log(resolve);
// }).catch((a)=>{
//     console.log(a)
// })

const promse5=new Promise(function(resolve,reject){
    setTimeout(()=>{
        const a= true
        if(!a){
            resolve('Worked')

        }else{
            reject("Not Worked")
        }
    })
})

// Till now we have consumed or used our promise through that but there is one more way that is called async await it will 
// wait till the result comes out.

async function consumePromise5(){
    try {
        const d=await promse5
        console.log(d);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()
console.log(5);

// async function apifetching(){
//     const a=  fetch('https://api.github.com/users/Adimgr1')
//     const b = await a
//     const c= await b.json()
//     console.log(c);
// }
// apifetching();

fetch('https://api.github.com/users/Adimgr1').
then((res)=>{
    return(res.json()) // we know that it res have the response from fetch but actually when we say res.json() then that file
    // takes some time to convert into json and if we simply give print command after that then it will say promise pending.
    // so that's why we need to put multiple then because when one then is completed than only it goes to next then.
}).then((a)=>{
    console.log(a);

})
