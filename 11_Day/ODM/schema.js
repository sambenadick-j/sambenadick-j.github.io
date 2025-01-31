const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: 20,
        max: 100
    },
    friend: {
        type: Schema.Types.ObjectId,
        ref: "customer"
    },
    address: {
        state: String,
        pincode: String
    },
    hobbies: [String],
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        lowercase: true,
        uppercase: false
    }
});

module.exports = model("customer", customerSchema);