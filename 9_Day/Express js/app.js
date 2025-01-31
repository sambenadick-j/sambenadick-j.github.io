const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")

dotenv.config({ path: './config.env'})

const app = express()

app.use(morgan("dev"))
app.use(express.json())

const { getAll, getOne, post, deleteOne, patch, put, validator, idValidator } = require("./routeHandler/productFunction")

app.route("/api/v1/products")
    .get(getAll)
    .post(validator, post)

app.route("/api/v1/products/:id")
    .get(idValidator, getOne)
    .put(put)
    .patch(patch)
    .delete(deleteOne)

module.exports = app;