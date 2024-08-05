const { categories, createCategory, updateCategory, deleteCategory, categoryById } = require("../controller/category");
const { authJWT } = require("../JWT-config");
const authorize = require("../middlewares/authorize");
const Category = require("../models/Category");

const { Router } = require('express')

const router = Router();

router.get('/', categories);

router.get('/:id',authJWT,categoryById)

router.post('/create',authJWT, createCategory);

router.put('/update/:id',authJWT, updateCategory);

router.delete('/delete/:id',authJWT,deleteCategory);
module.exports = router;