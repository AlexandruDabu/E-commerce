const { Router } = require('express');
const sequelize = require('../db/config');
const { authJWT } = require('../JWT-config');
const authorize = require('../middlewares/authorize');
const Product = require('../models/Products');
const { createProduct, products, updateProduct, deleteProduct, productById, productByCategoryName } = require('../controller/product');

const router = Router();

router.get('/', products)

router.get('/:category', productByCategoryName)

router.get('/:id',authJWT, productById)

router.post('/create',authJWT, createProduct);

router.put('/update/:id',authJWT,updateProduct);

router.delete('/delete/:id',authJWT,deleteProduct);

module.exports = router;