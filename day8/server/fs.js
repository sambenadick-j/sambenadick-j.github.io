//FS Module
const fs=require("fs");
const { nextTick } = require("process");
//fs.writeFile("samplefs.txt","A new file created using fs",(err)=>{})
//fs.appendFile("samplefs.txt","\nappending the data",(err)=>{})
// fs.readFile("samplefs.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
//fs.unlink("samplefs.txt",()=>{});
// try{
//     fs.readFile("samplefs.txt","utf-8",(err,data)=>{
//         if (err) throw err
//         console.log(data)
//     })
// }catch(err){
//     console.log(err.message)
// }
// fs.readFile("samplefs.tt","utf-8",(err,data)=>{
//              if (err) throw err
//              console.log(data)
// })
// process.on("uncaughtException",(err)=>{
//     console.log(err.message);
// })
// fs.mkdir("folder",(err)=>{})
// fs.rmdir("folder",(err)=>{})
    // fs.readFile("new.txt",(err,data)=>{
    //     console.log(data.toString())
    // })
    // const filedata=fs.readFileSync("new.txt","utf-8")
    // console.log(filedata)
    // console.log("Hi");
    
fs.writeFile("firstfile.txt", "first file",  ()=>{
    fs.appendFile("firstfile.txt", "first append", ()=>{
        fs.readFile("firstfile.txt", "utf-8", (_err, data)=>{
            console.log(data);
            
        })
    })
})