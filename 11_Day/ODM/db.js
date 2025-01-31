// All the default operatiors are from mongoose library

const mongoose = require("mongoose");
const Cust = require("./schema")

async function db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/customer", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Mongoose Error:", error);
    console.log("Error in DB connection");

  } 
  // -------------------------------TRADITIONAL CREATE METHOD-------------------------------------------
  /*
  const newCustomer = new Cust({
    namw :'jhon',
    age:21,
    address:{
      state:'TN',
      pincode:'123456'
    },
    hobbies:['reading','traveling']
  })
  newCustomer.save();
  */


  // -------------------------------MODERN CREATE METHOD-------------------------------------------
/*  
  const newCustomer = await Cust.create({
      name:'Johnson',
      age:40,
      address:{
        state:'TN',
        pincode:'123456'
      },
      hobbies:['reading','traveling'],
      email:'johnson@gmail.com',
      friend: '67985f7338841049a7029029'
  })
  console.log(newCustomer);
 */ 
//  ----------------------------------READ METHOD------------------------------------------

// const customerData = await Cust.findById('67985f7338841049a7029029').populate('friend')
// console.log(customerData);

// const customerData = await Cust.find().where('name').equals('Alice').limit(1)
// console.log(customerData);


//  ----------------------------------UPDATE METHOD------------------------------------------

// const customerData = await Cust.findByIdAndUpdate('67985f7338841049a7029029',{name:'Johnson', $set:{'age':41}})
// console.log(customerData);


//  ----------------------------------DELETE METHOD------------------------------------------

// const customerData = await Cust.findByIdAndDelete('67985f7338841049a7029029')
// console.log(customerData);


} db();
