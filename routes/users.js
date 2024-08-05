const { Router } = require('express');
const sequelize = require('../db/config'); // Adjust path as needed
const User = require('../models/User');
const { generateToken, verifyToken, authJWT } = require('../JWT-config');
const Cart = require('../models/Cart');
const CartItems = require('../models/CartItems');
const Product = require('../models/Products');
const { login, register, getUsers, getUserById } = require('../controller/users');
const router = Router();

//Get element
router.get('/', getUsers);

router.get('/:id', getUserById);

router.put('/update', authJWT, async(req,res) => {
    try{
        const id = req.user.userId;
        const data = req.body;
        const filedsToUpdate = Object.fromEntries(
            Object.entries(data).filter(([_,value])=>value!== undefined)
        )
        const [updated] = await User.update(
            filedsToUpdate,
            {where: {id}}
        )
        if(updated){
            const updatedUser = await User.findByPk(id);
            res.status(201).json({message: "User updated" , updatedUser})
        } else {
            res.status(404).json({message: "User not found"});
        }
    }catch(error){
        console.log(error);
    }
})

//Register Router
router.post('/register', register);

router.post('/login', login);


router.get('/logout', (req,res) =>{
    req.logout();
    res.redirect('/');
})



router.get('/profile', authJWT, async (req,res) => {
    const userId = req.user.userId
    const user = await User.findOne({where : {id: userId}});

    if(!user) {
        return res.status(404).json({message:"User not found"});
    }

    res.json({message: 'This user is protected', user});

})

router.post('/addProduct',authJWT, async (req,res) => {
    try{
        const id = req.user.userId;
        const cart = await Cart.findOne({where: {user_id: id}})
        const {product_id, quantity} = req.body;
        const cart_item = await CartItems.create({
            cart_id: cart.id,
            product_id: product_id,
            quantitiy: quantity
        })
        res.status(201).json({message: 'item added succesfully', cart_item});
    }catch(err){
        console.log(err)
    }
    })
module.exports = router;
