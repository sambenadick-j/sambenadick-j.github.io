// const  http=require("http")

//  const server=http.createServer((req,res)=>{
// console.log(req.url);
// const fs=require("fs")
// fs.readFile("index.html","utf8",(err,data)=>{
   
//    res.writeHead(200, {"Content-Type": "text/html"})
//     res.end(data)
// })


// })
// server.listen(3000,()=> console.log("server is running")
// )

// const logDateTime = () => {
//     const now = new Date();
//     console.log(`Current Date and Time: ${now.toString()}`);
// };

// logDateTime();
// process.on('SIGINT', () => {
//     logDateTime();
//     console.log("Server is shutting down...");
//     process.exit();
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path')
// const PORT = 3000;
// const jsondata = fs.readFileSync("product.json", 'utf-8');
// console.log (jsondata);

// const htmlstl=fs.readFileSync("index.html", "utf-8")


// const server = http.createServer((req,res) =>{
// //    res.writeHead(200, {'Content-Type': 'application/json'});
// //    res.end(jsondata);
//     let path = req.url
//     if(path=="/home" || path=="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end(htmlstl)
//     }
//         else if(path==="/contact"){
//             res.end("contact")
//         }
// else if(path==="/about"){
//     res.end("about")
// }
// else if (path === "/product"){
//     res.end("product")
// }



// })


// server.listen(PORT, (err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("https://127.0.1:3000");
//     }
// })

// const http= require("http")
// const fs = require("fs")
// const path = require("path")

// const data = fs.readFileSync(path.join(__dirname, "template", "template.html"), "utf-8")
// console.log(data);


// const server=http.createServer((req, res)=>{
//     let path = req.url
//     if (path ==="/home"){
//         res.end(data.replace("{{%CONTENT%}}", "You are at home"))
//     }
//     else if (path ==="/about")
//     {

//     }
//     else if (path === "/contact"){

//     }
//     else if (path ==="/contact"){
        
//     }
    


// })

// server.listen(3000, ()=>console.log("server"));

// const http = require('http');
// const fs = require('fs');
// const path = require('path')
// const PORT = 3000;
// const jsondata = fs.readFileSync("index.html", 'utf-8');
// console.log (jsondata);


// const server = http.createServer((req,res) =>{
// //    res.writeHead(200, {'Content-Type': 'application/json'});
// //    res.end(jsondata);
//     let path = req.url
//     if(path==="/home")
//         {res.writeHead(200,{'content-type':'text/html'})
//     fs.readFileSync("index.html",'utf8', (err, data)=>{
//         res.write(data)
//         res.end();
//     });
// }
//         else if(path==="/contact"){
//             res.end("contact")
//         }
// else if(path==="/about"){
//     res.end("about")
// }
// else if (path === "/product"){
//     res.end("product")
// }



// })


// server.listen(PORT, (err) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("https://127.0.1:3000");
//     }
// })

// const http = require('http');
// const fs = require('fs');
// const path = require('path')    
// const data = fs.readFileSync(path.join(__dirname,"template","template.html" ), 'utf-8');
// const data1 = fs.readFileSync(path.join(__dirname,"template", "product.html"), "utf-8")
// const jsonData = JSON.parse(fs.readFileSync( "product.json", "utf-8"))

// let productHtmlArry = jsonData.map((prod)=>{
//     let output = data1.replace("{{%IMAGE%}}", prod.productImage)
//     output = output.replace("{{%NAME%}}", prod.name)
//     output = output.replace("{{%MODNAME%}}", prod.modeName)
//     output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber)
//     output = output.replace("{{%SIZE%}}", prod.size)
//     output = output.replace("{{%CAMERA%}}", prod.camera)
//     output = output.replace("{{%PRDINFO%}}", prod.Description)
//     output = output.replace("{{%COLOR%}}", prod.color)
//     return output

// })

// productHtmlArry = productHtmlArry.join("")
// console.log(productHtmlArry);


// const server = http.createServer((req,res) =>{

//     if(req.url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end(data)
//     }


//     let path = req.url
//     path= path.toLocaleLowerCase()
//     if (path ==="/home"){
//         res.end(data.replace("{{%CONTENT%}}", "You are at home"))
//     }
//     else if (path ==="/about")
//     {
//         res.end(data.replace("{{%CONTENT%}}", "You are at about"))
//     }
//     else if (path === "/product"){
//         res.end(data.replace("{{%CONTENT%}}", productHtmlArry))
//     }
//     else if (path ==="/contact"){
//         res.end(data.replace("{{%CONTENT%}}", "You are at contact"))
//     }


    
    
    
//     else {
//         res.writeHead(404,{'content-type':'text/html'})
//         res.end("<h1>404 error page. page does not exist</h1>")
//     }
// })  

// server.listen(3000,()=>{    
//     console.log("server is running on port 3000")
// }  )


// // // const server=http.createServer((req,res)=>{
// // // console.log(req.url);
// // const fs=require("fs")
// // const jsonData=fs.readFileSync("product.json","utf8")
// // console.log(jsonData)
// // const server=http.createServer((req,res)=>{
// //     // res.writeHead(200,{"content-type": "application/json"})
// //     // res.end(jsonData)
// //     let path=req.url
// //     if(path==="/home"){
// //         res.end("home")
// //     }
// //     else if(path==="/contact"){
// //         res.end("contact")
// //     }
// //     else if(path==="about"){
// //         res.end("about")
// //     }
// //     else if(path==="/products"){
// //         res.end("product")
// //     }
// // })
// // // let Query=url.parse(req.url)
// // // fs.readFile("index.html","utf8",(err,data)=>{
// // //   res.writeHead(200,{"Content-Type":"text/html"})
// // //   res.end(data)
// // // })
// // // })
// // server.listen(3000,()=> console.log("http://127.0.1:3000")
// // )
// // const http = require('http');
// // const fs = require('fs');
// // const path = require('path')
// // const PORT = 3000;
// // const jsondata = fs.readFileSync("product.json", 'utf-8');
// // console.log (jsondata);
// // const htmlfile=fs.readFileSync("index.html","utf8");


// // const server = http.createServer((req,res) =>{
// // //    res.writeHead(200, {'Content-Type': 'application/json'});
// // //    res.end(jsondata);[]
// //     let path = req.url
// //     if(path=="/home" || path=="/"){
// //         res.writeHead(200,{"content-type":"text/html"})
// //         res.end(htmlfile)
// //     }
// //         else if(path==="/contact"){
// //             res.end("contact")
// //         }
// // else if(path==="/about"){
// //     res.end("about")
// // }
// // else if (path === "/product"){
// //     res.end("product")
// // }



// // })


// // server.listen(PORT, (err) =>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log("https://127.0.1:3000");
// //     }
// // })
// const http=require("http")
// const fs= require("fs");
// const path = require("path");

// const PORT=3000;
// const data = fs.readFileSync(path.join(__dirname, "template", "template.html"), 'utf-8')
// const server=http.createServer((req,res)=>{
//     let path=req.path;
//     if(path==="/home"){res.end(data.replace("{{%CONTENT%}}","hello this is content"))}
//     else if(path==="/contact"){res.end("contact")}
//     else if(path==="/about"){res.end("about")}
//     else if(path==="/product"){"product"}
//     else{res.writeHead(404,{"content-type":"text/plain"});res.end("404 not found")}


// })
// server.listen(PORT,()=>{console.log(PORT)})
// const http = require('http');
// const fs = require('fs');
// const path = require('path')  
// const PORT = 3000; 
// const url = require("url")
// const data = fs.readFileSync(path.join(__dirname,"template","template.html" ), 'utf-8');
// const data1 = fs.readFileSync(path.join(__dirname,"template", "product.html"), "utf-8")
// const jsonData = JSON.parse(fs.readFileSync( "product.json", "utf-8"))
// // console.log(jsonData);
// let productHtmlArray=jsonData.map((prod)=>{
//     let output=data1.replace("{{%IMAGE%}}",prod.productImage)
//     output=output.replace("{{%PRICE%}}",prod.price)
//     output = output.replace("{{%NAME%}}", prod.name)
//     output = output.replace("{{%MODNAME%}}", prod.modeName)
//     output = output.replace("{{%MODNUM%}}", prod.modelNumber)
//     output = output.replace("{{%MODSIZE%}}", prod.size)
//     output = output.replace("{{%CAM%}}", prod.camera)
    
//     output = output.replace("{{%COLOR%}}", prod.color)
//     output = output.replace("{{%ID%}}", prod.id)
// return output
// })
// productHtmlArray=productHtmlArray.join("")
// console.log(productHtmlArray)
// // console.log(data1);


// const server = http.createServer((req,res) =>{

//     if(req.url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end(data)
//     }


//     let path = req.url
//     path= path.toLocaleLowerCase()
//     let {query} = url.parse(req.url, true)
//     if (path ==="/home"b){
//         res.end(data.replace("{{%CONTENT%}}", "You are at home"))
//     }
//     else if (path ==="/about")
//     {
//         res.end(data.replace("{{%CONTENT%}}", "You are at about"))
//     }
//     else if (path.indexOf("/product")){
// console.log(path.indexOf());

//         if(query.id)
//         {
//             res.end("hello")
//         }
//         else{
//             res.end(data.replace("{{%CONTENT%}}", productHtmlArray))

//         }
//     }
//     else if (path ==="/contact"){
//         res.end(data.replace("{{%CONTENT%}}", "You are at contact"))
//     }


    
    
    
//     else {
//         res.writeHead(404,{'content-type':'text/html'})
//         res.end("<h1>404 error page. page does not exist</h1>")
//     }
// })  

// server.listen(3000,()=>{    
//     console.log("server is running on port 3000")
// }  )




const http = require("http")
const path = require("path")
const url = require("url")
const fs = require("fs")
const data = fs.readFileSync(path.join(__dirname, "template", "template.html"), "utf8")
const data1 = fs.readFileSync(path.join(__dirname, "template", "product.html"), "utf8")
const jsonData = JSON.parse(fs.readFileSync("product.json", "utf-8"))
let productHtmlArry = jsonData.map((prod) => {
  let output = data1.replace("{{%IMAGE%}}", prod.productImage)
  output = output.replace("{{%MODNAME%}}", prod.modeName)
  output = output.replace("{{%NAME%}}", prod.name)
  output = output.replace("{{%%MODNUM%%}}", prod.modelNumber)
  output = output.replace("{{%MODSIZE%}}", prod.size)
  output = output.replace("{{%CAM%}}", prod.camera)
  output = output.replace("{{%PRICE%}}", prod.price)
  output = output.replace("{{%COLOR%}}", prod.color)
  output = output.replace("{{%ID%}}", prod.id)

  return output
})
function renderProduct() {
    
        let output = data1.replace("{{%IMAGE%}}", prod.productImage)
        output = output.replace("{{%MODNAME%}}", prod.modeName)
        output = output.replace("{{%NAME%}}", prod.name)
        output = output.replace("{{%%MODNUM%%}}", prod.modelNumber)
        output = output.replace("{{%MODSIZE%}}", prod.size)
        output = output.replace("{{%CAM%}}", prod.camera)
        output = output.replace("{{%PRICE%}}", prod.price)
        output = output.replace("{{%COLOR%}}", prod.color)
        output = output.replace("{{%ID%}}", prod.id)
      
        return output
     
}
productHtmlArry = productHtmlArry.join(",")





const server = http.createServer((req, res) => {
  let path = req.url


  path = path.toLowerCase()
  let { query, pathname } = url.parse(req.url, true)
  pathname = pathname.toLowerCase()
  console.log(pathname);


  if (path === "/home") {
    res.end(data.replace("{{%CONTENT%}}", "You are at home "))
  }
  else if (path === "/about") {
    res.end(data.replace("{{%CONTENT%}}", "You are at about "))
  }
  else if (path === "/contact") {
    res.end(data.replace("{{%CONTENT%}}", "You are at contact "))
  }
  else if (pathname === "/products") {
    console.log(path.indexOf("/products"));

    if (query.id) {
let id=query.id*1


      let findOne = jsonData.find(item => item.id === id)
      res.end(data.replace("{{%CONTENT%}}", renderProduct(findOne)))
      console.log(findOne);
      renderProduct(findOne(prod))
    }
    else {

      res.end(data.replace("{{%CONTENT%}}", productHtmlArry))
    }


  }
  else res.end("404")

})

server.listen(3000, () => console.log("server"))