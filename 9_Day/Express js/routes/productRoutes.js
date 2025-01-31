const express = require("express")
const productRoutes = express.Router()

app.use("/api/v1/products", productRoutes)

productRoutes.param("id", (req, res, next, id) => {
    req.id = id;
    console.log(req.id);
    
    next();
})

const { getAll, getOne, post, deleteOne, patch, put, validator } = require("../routeHandler/productFunction")

productRoutes.route("/")
  .get(getAll)
  .post(validator, post)

productRoutes.route("/:id")
  .get(getOne)
  .put(put)
  .patch(patch)
  .delete(deleteOne)

module.exports = productRoutes;