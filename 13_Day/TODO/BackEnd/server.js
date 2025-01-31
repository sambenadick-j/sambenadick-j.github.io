// boilerplate code
const express = require("express");
const app = express();
const DB = require("./DB/db");
const cors = require("cors");
const todoSchema = require("./model/schema");

app.use(cors());
app.use(express.json());

app.get("/api/v1/todo", async (req, res) => {
    await DB();
    const task = await todoSchema.find();
    console.log(task);
    res.send(task);
});

app.post("/api/v1/todo", async (req, res) => {
    await DB();
    const body = req.body;
    const status = await todoSchema.create(body);
    console.log(status);
    res.json(status);
});

app.put("/api/v1/todo/:id", async (req, res) => {
    await DB();
    let id = req.params.id;
    const body = req.body;
    const status = await todoSchema.updateOne({_id: id}, {$set: {task: body.task}});
    console.log(status);
    res.json(status);
});

app.delete("/api/v1/todo/:id", async (req, res) => {
    await DB();
    let id = req.params.id;
    const status = await todoSchema.deleteOne({_id: id});
    console.log(status);
    res.send(status);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
