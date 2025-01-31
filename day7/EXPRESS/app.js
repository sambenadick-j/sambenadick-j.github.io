// const http = require("http")
// const server = http.createServer()

// server.on("request", (req, res)=>{
//     console.log("requested");
    
// })
// server.listen(3000)


// const events = require("events")
// const CustomEvent = new events.EventEmitter()
// CustomEvent.on("cs", ()=>{
//     console.log("cs is called");
// })

// CustomEvent.emit("cs")



// const express = require("express")
// const path=require("path")
// const app = express()
// app.get("/", (req, res)=>{
// //     res.json({ok:true})


// res.set({'Context':'html','hi':'in'})
//     res.status(200).sendFile(path.join(__dirname, 'index.html' ))


// })
// app.listen(3000, ()=>{
//     console.log("server is running");
// })






const express = require('express')
//const { status } = require('express/lib/response')
const app = express()
app.use(express.json())
const fs = require("fs")
const path = require("path")
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "model", "product.json"), "utf8"))



app.get("/api/v1/products", (req, res) => {
    try {
        res.status(200).json({
            status: "fulfilled",
            count: jsonData.length,
            data: {
                products: jsonData
            }
        })
    } catch (e) {
        res.status(500).json({
            status: "fail",
            message: e
        })
    }
})

app.get("/api/v1/products/:id", (req, res) => {
    console.log(req.params)
    let id = req.params.id * 1
    const data = jsonData.find((i) => i.id === id)

    try {
        res.status(200).json({
            status: "fulfilled",
            count: jsonData.length,
            data: {
                products: data
            }
        })
    } catch (e) {
        res.status(500).json({
            status: "fail",
            message: e
        })
    }
})

app.get("/*", (req, res) => {
    res.status(404).send("Not Found")
    
})

app.post('/api/v1/products',(req,res)=>{
  
    const id = jsonData.length+1
    const newProduct={...req.body, id:id}
    jsonData.push(newProduct)

    fs.writeFile(path.join(__dirname, "model", "product.json"), JSON.stringify(jsonData), (err) => {
        if (err) {
            return res.status(500).json({
                status: "fail",
                message: err
            });
        } 
        res.status(200).json({
            status: "fulfilled",
            count: jsonData.length,
            data: {
                products: jsonData
            }
        });
    });
})


app.delete("/api/vi/products/:id", (req, res)=>{

    let id = req.params.id*1
    let deleteJson = jsonData.filter((i)=>i.id!==id)
    fs.writeFile(path.join(__dirname, "model", "product.json"), JSON.stringify(jsonData),()=>{})
    res.status(204)
    res.json()
})


app.listen(3000, () => {
    console.log("server is running")
})