const { Router } = require('express');
const Cart = require('../models/Cart');
const { authJWT } = require('../JWT-config');
const CartItems = require('../models/CartItems');
const Order = require('../models/Orders');
const OrderDetails = require('../models/OrderDetails');

const router = Router();

router.get('/',authJWT, async (req,res) => {
    try{
        const id = req.user.userId;
        const cart = await Cart.findOne({where : {user_id : id}})
        if(cart){
            res.status(200).json({message: 'Your cart', cart: cart});
        }
        res.status(404).json({message: 'This user doesnt have any cart'})
    }catch(err){
            console.log(err)
        }
    })

router.post('/create', authJWT, async (req,res) => {
    try{
        const id = req.user.userId;
        const existingCart = await Cart.findOne({where : {user_id : id}})
        if(existingCart){
            res.status(400).json({message: 'This user already has an cart created'});
        }
        const cart = await Cart.create({
            user_id: id
        })
        res.status(201).json({message: 'cart created succesfully', cart: cart})
    }catch(err){
        console.log(err)
    }
})

router.post('/checkout', authJWT, async(req,res) => {
    try{
        const id = req.user.userId;
        const cart = await Cart.findOne({where: {user_id: id},include: [{
            model: CartItems,
            as: 'items'
        }]
    });
    
    if(!cart || cart.items.length == 0){
        return res.status(400).json({message: 'Your cart is empty'});
    }

    const order = await Order.create({
        user_id: id,
        order_date: new Date(),
        status: 'completed'
    })

    for(const item of cart.items){
        await OrderDetails.create({
            order_id: order.id,
            product_id: item.product_id,
            quantity: item.quantitiy,
            price: item.price
        })
    }
    await CartItems.destroy({where : {cart_id: cart.id}});

    res.status(201).json({message: "Order created succesfully", order})
    }catch(err){
        console.log(err);
    }
})
// router.put('/',)
module.exports = router;