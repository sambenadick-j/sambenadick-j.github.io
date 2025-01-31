// getElementByid
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

const h1Tag = document.querySelector('h1');
console.log(h1Tag);

const h1TagByTag = document.getElementsByTagName('h1')[0];
console.log(h1TagByTag);

h1Tag.textContent = 'Hello, World! (Updated)';
h1TagByTag.textContent = 'Hello, World! (Updated Again)';

location.assign("google.com");

let div = document.createElement("div")
let textNode = document.createTextNode("created using js")
div.append(textNode)
console.log(div)