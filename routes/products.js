const { Router } = require('express');
const sequelize = require('../db/config');
const { authJWT } = require('../JWT-config');
const authorize = require('../middlewares/authorize');
const Product = require('../models/Products');

const router = Router();

router.get('/', async(req,res) => {
    try {
        const products = await Product.findAll()
        res.status(200).send(products);
    } catch (err) {
        console.log(err);
    }
})


router.post('/create', authJWT, authorize('Admin'), async(req,res) => {
    try{
        const {name, description, price, stock, category_id, image_url} = req.body;
        Product.create({
            name: name,
            description: description || '',
            price: price,
            stock: stock,
            category_id: category_id,
            image_url: image_url
        })
        res.status(201).json({message: 'Prdouct created'})

    }catch(err){
        console.log(err);
    }
})

router.put('/update/:id', authJWT, authorize('Admin') , async(req,res) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const filedsToUpdate = Object.fromEntries(
            Object.entries(data).filter(([_,value])=>value!== undefined)
        )

        const [updated] = await Product.update(
            filedsToUpdate,
            {where: {id: id}}
        );

        if(updated){
            const updatedProduct = await Product.findByPk(id);
            res.status(200).json({message: 'Product updated', product: updatedProduct})
        } else {
            res.status(404).json({message: 'Prdouct not found'})
        }
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete/:id', authJWT, authorize('Admin'), async(req,res) => {
    try{
        const id = req.params.id;
        const deleted = await Product.destroy({where : {id}});
        if(deleted){
            res.status(204).json({message: 'Product deleted'});
        } else{
            res.status(404).json({message: 'Product not found'})
        }
    }catch(err){
        console.log(err);
    }
})
module.exports = router;