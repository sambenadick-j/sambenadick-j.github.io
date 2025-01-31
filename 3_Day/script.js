// localStorage.setItem("getBack", 250)
console.log(localStorage.getItem("getBack"));

let reloadCount = Number(localStorage.getItem("reload")) || 0;
localStorage.setItem("reload", ++reloadCount);
console.log(reloadCount);
