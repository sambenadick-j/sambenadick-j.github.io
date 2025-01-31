const express = require('express');
const app = express();
const db = require("./db/db");
const CourseSchema = require("./models/schema");
const cors = require('cors');

app.use(cors());

app.get('/api/v1/search', async (req, res) => {
    await db();
    let query = req.query.search;
    
    // using regular expression atomic operator
    let course = await CourseSchema.find({title: {$regex : query, $options: 'i'}});
    console.log(course);

    res.json(course);
})

app.listen(3000, ()=>{})