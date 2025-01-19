// example to show that promise callback are executed before setTimeout
let p = Promise.resolve(2);

setTimeout(()=>{
   console.log("callback 1")
},0)

p.then(v=>{
    console.log(v,"I'm p")
})
