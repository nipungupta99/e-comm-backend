const express = require('express');
const ProductController = require("../controllers/ProductController");
const router = express.Router();


router.post('/create',ProductController.createProduct);
router.get('/:id',ProductController.getProduct);
router.get('/',ProductController.getAllProducts);
router.put('/update',ProductController.updateProduct);
router.delete('/delete',ProductController.deleteProduct);

module.exports = router;