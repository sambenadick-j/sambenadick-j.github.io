const {Schema, model} = require('mongoose');


const courseDetails = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = model('course', courseDetails);
