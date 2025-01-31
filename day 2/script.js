// /*
// console.log("Timer started!");

// setTimeout(() => {
//   console.log("Bye");
// }, 6000);
// console.log("Hello");


// let counter = 1;
// const intervalId = setInterval(() => {
//   console.log(Count: ${counter});
//   counter++;

//   if (counter > 5) {
//     clearInterval(intervalId); 0
//     console.log("Interval cleared!");
//   }
// }, 1000);

// console.log("Interval started!");*/


// const myPromise = new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected with an error!");
//     }
// });

// myPromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


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
//     .then((results) => {
//         console.log("All promises resolved:", results);
//     })
//     .catch((error) => {
//         console.log("One of the promises failed:", error);
//     });

// const data = () => {
//     const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     return response;
// }
// data().then((e) => {
//     console.log(e);
//     console.log(e.json());
// }).catch((e) => {
//     console.log(e)
// });

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(todo => {
//       console.log(`ID: ${todo.id}`);
//       console.log(`Title: ${todo.title}`);
//       console.log(`Completed: ${todo.completed}`);
//       console.log('---------------------------');
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));

// let list = document.getElementsByClassName("one")
// console.log(list)

// let list = document.querySelectorAll("ul li")
// console.log(list)

try{
    let a = 10;
    let b = 0;
    let c = a/b;
    throw new Error ("Yes, you are not allowed")
    
} catch( error ){
    console.log(error)
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    button.addEventListener("click", () => {
        alert("You have clicked a button");
    });
});


const event1 = (e)=> {
    console.log(e.target.tagName);
    removeEventListener()
}

// mouse enter Event

window.addEventListener("keyup", catchkeyboard)