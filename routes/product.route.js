const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    removeAllProducts,
    findProductsByName
  } = require('../controllers/product.controller.js');


  router.get('/', (req, res) => {
    if (req.query.name) {
      return findProductsByName(req, res);
    }
    return getProducts(req, res);
  });

// Retrieve a single product by ID
router.get("/:id", getProduct);

// Create a new product
router.post("/", createProduct);


// Update a product by ID
router.put("/:id", updateProduct);

// Remove a single product by ID
router.delete("/:id", deleteProduct);

// Remove all products
router.delete("/", removeAllProducts);



module.exports = router;