const mongoose = require('mongoose');

async function db() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/course');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB');
        console.log(error);
    }
}

module.exports = db;
