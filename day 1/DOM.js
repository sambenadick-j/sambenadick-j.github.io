// function submitOrder() {
//     const phoneNumber = "918072113041";
//     const message = "Hello, I would like to place an order.";
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.location.href = whatsappURL;
// }


// function getInput() {
//     let noElements = prompt("Enter Number of Elements")
//     let ul = document.createElement("ul")
//     for(var i = 0; i < noElements; i++) {
//         let li = document.createElement("li")
//         let text = document.createTextNode(prompt(`Enter Element${i+1}`))
//         li.append(text)
//         ul.append(li)
//     }
    
//     let container = document.getElementById('container')
//     container.append(ul)
// }

// getInput()


// body = document.body
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Strawberry"]
// let ul = document.createElement("ul")
// fruits.map((i)=>{
//     let li = document.createElement("li")
//     let text = document.createTextNode(i)
//     li.append(text)
//     ul.append(li)
// })
// body.append(ul)

// document.body.append(ul)
// body.children[2].remove();

// let li = document.getElementById("one")
// li.remove()


// let date = new Date()
// console.log(date.getDate())
// console.log(date.getMinutes())
// console.log(date.getTime())

// try{

// }
// catch(err){
//     console.log(err)
// }
// let button = document.getElementById("button")
// button.addEventListener("click", function(){
//     alert("Button Clicked")
// })



// let parent = document.getElementsByClassName("div1")[0]
// let child1 = document.getElementsByClassName("div2")[0]
// let child2 = document.getElementsByClassName("div3")[0]


// parent.addEventListener("click", ()=>{
//     alert(" parent Div Clicked")
// })

// child1.addEventListener("mouse entered", (e)=>{
//     e.stopPropagation()
//     alert("Child1 Div Clicked")
// })

// child2.addEventListener("click", (e)=>{
//     e.stopPropagation()
//     alert("Child2 Div Clicked")
// })

// const event1=(e)=>{
//     alert(e.target.tagName);
    
//     remove()
// }

// child2.addEventListener("mouse leave", event1)
// const remove=()=>{
//     child2.removeEventListener("mouse up", event1)
// }

// const catchKeyboard=(e)=>{
//     console.log(e.key)
// }

// window.addEventListener("keyup", catchKeyboard)