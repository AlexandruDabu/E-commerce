const { Router } = require('express');
const { authJWT } = require('../JWT-config');
const Order = require('../models/Orders');

const router = Router();

router.get('/',authJWT,async (req,res) => {
    const id = req.user.userId;
    const orders = await Order.findOne({where : {user_id: id}})
    if(orders){
        res.status(200).json({orders: orders});
    }else {
        res.status(404).json({message: 'No orders has been found'});
    }
})
module.exports = router;