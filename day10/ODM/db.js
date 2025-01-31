db.js

const mongoose = require("mongoose");
const cust = require("./schema")
async function db(){
    try{
        await mongoose.connect('mongodb://localhost:27017/customer');
        console.log("database successfully connected");
    }catch(e){
        console.log("error on connection db");
    } 
    // const newCustomer = new cust({
    //     name:"praveen kumar",
    //     age:21,
    //     friend:'67985d850cdc412393f9a955',
    //     address:{
    //         pincode:123456,
    //         state:"TN"
    //     },
    //     hobbies:["gaming","singing"]

    // })

const update = await cust.updateOne({name: "alice", {$set:{age:20}}})
    console.log(update)

}
db()