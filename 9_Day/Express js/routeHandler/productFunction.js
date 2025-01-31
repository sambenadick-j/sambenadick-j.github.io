const fs = require("fs")
const path = require("path")
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../','./model/product.json'), 'utf-8'))

let products = []; // This is a temporary storage. In a real app, you'd use a database

// ---------------------------------------Get API--------------------------------------------- //

const getAll = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products: jsonData
        }
    });
};

// ---------------------------------------Get API--------------------------------------------- //

const getOne = (req, res) => {
    const id = parseInt(req.params.id);
    const product = jsonData.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            status: 'fail',
            message: 'Product not found'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    });
};


// ---------------------------------------Post API--------------------------------------------- //

const post = (req, res) => {
    // Check if required fields are present
    if (!req.body.name || !req.body.count) {
        return res.status(400).json({
            status: 'fail',
            message: 'Name and count are required fields'
        });
    }

    const newProduct = {
        id: jsonData.length + 1,
        name: req.body.name,
        count: req.body.count
    };
    
    try {
        jsonData.push(newProduct);

        fs.writeFileSync(
            path.join(__dirname, '../', './model/product.json'),
            JSON.stringify(jsonData, null, 4),
            'utf-8'
        );
        
        res.status(201).json({
            status: 'success',
            data: {
                product: newProduct
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error saving product'
        });
    }
};

// ---------------------------------------Delete API--------------------------------------------- //

const deleteOne = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Product not found'
        });
    }

    products.splice(productIndex, 1);
    
    res.status(204).json({
        status: 'success',
        data: null
    });
};

// ---------------------------------------PATCH API--------------------------------------------- //

const patch = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Product not found'
        });
    }

    products[productIndex] = { ...products[productIndex], ...req.body };
    
    res.status(200).json({
        status: 'success',
        data: {
            product: products[productIndex]
        }
    });
};

// ---------------------------------------PUT API--------------------------------------------- //

const put = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Product not found'
        });
    }

    products[productIndex] = { id, ...req.body };
    
    res.status(200).json({
        status: 'success',
        data: {
            product: products[productIndex]
        }
    });
};

const validator = (request, response, next) => {
    let  body = request.body;
    let header = request.headers;
    console.log(header);
    
    if(!body.name || !body.count){
        return response.status(400).json({
            status: "fail",
            message: "Name and count are required fields"
        });
    }
    next();
}

const idValidator = (req, res, next, id) => {
    id *= 1;
    const item = jsonData.find((p) => p.id === id);
    if(!item){
        return res.status(400).json({ // 400 is the bad request status code
            status: "fail",
            message: "Product not found"
        });
        
    }
    next();
}

module.exports = {
    getAll,
    getOne,
    post,
    deleteOne,
    patch,
    put,
    validator,
    idValidator
}


// bcrypt

