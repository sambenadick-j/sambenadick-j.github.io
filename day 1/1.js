// // day 2 

// // set timer function
// const sayhello=()=>{
//     setTimeout(()=>
//     {
//     console.log("hello");

//     }, 2000)    
// }


// const sayBye=()=>{
//     console.log("Bye");
    
// }

// sayhello()
// sayBye();

// set Interval


// let i = 0 

// const interval = setInterval(()=>
// {
//     console.log("hello world");
// i++
// }, 3000)

// if(i === 3)
// {
//     clearInterval(interval)
// }

// let takeTicket = new Promise((resolve, reject)=>
// {
//     if(false)
//     {
//         resolve("yes booked");
//     }
//     else{
//         reject("not yet");
//     }
// })

// takeTicket.then((e)=>{
//     console.log(e);
    
// }).catch((err)
// {
//     console.log(err);
    
// })


// let takeTicket1 = new Promise((resolve, reject)=>
//     {
//         if(false)
//         {
//             resolve("yes booked");
//         }
//         else{
//             reject("not yet");
//         }
//     })
    
//     takeTicket1.then((e)=>{
//         console.log(e);
        
//     }).catch((err)
//     {
//         console.log(err);
        
//     })

// Promise.all([takeTicket, takeTicket1])

// console.log("Timer started!");

// setTimeout(() => {
//   console.log("Bye");
// }, 6000);

// console.log("Hello");

// let counter = 1;
// const intervalId = setInterval(() => {
//   console.log(`Count: ${counter}`);
//   counter++;

//   if (counter > 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared!");
//   }
// }, 1000);

// console.log("Interval started!");

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//       resolve("Promise resolved successfully!");
//     } else {
//       reject("Promise rejected with an error!");
//     }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error); 
//   });

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 resolved!"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise 2 rejected!"), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 3 resolved!"), 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log("All promises resolved:", results);
//   })
//   .catch((error) => {
//     console.log("One of the promises failed:", error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         console.log(result.value);
//       } else {
//         console.log(result.reason);
//       }
//     });
//   });


// const data=()=>{
//     const response=fetch("https://jsonplaceholder.typicode.com/todos/1")
//     return response;
// }

// data().then((e)=>
// {
//     console.log(e);
//     console.log(e.json());
    
// }).catch((e)=>
// {
//     console.log(e);
    
// })

// const data=async ()=>{
//     let response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//      response  = await response.json()
//      console.log(response);
     

// }
// data();
