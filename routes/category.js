const { authJWT } = require("../JWT-config");
const authorize = require("../middlewares/authorize");
const Category = require("../models/Category");

const { Router } = require('express')

const router = Router();


router.post('/create',authJWT, authorize('Admin'), (req,res) => {
    try{
    const {name, description} = req.body;
    Category.create({
        name: name,
        description: description
    })
    res.status(201).json({message: 'Category created'})
}catch(err){
        console.log(err);
    }
})
module.exports = router;