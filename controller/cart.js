const getById = require("../models/Interfaces/cart")

exports.readById = async (req,res) => {
    try{
        const cart = await getById(req.params.id);
        if(!cart){
            res.status(404).json({message: 'This user doesnt have a cart'})
        }
        return res.json({data: cart})
    }catch(err){
        console.log(err);
    }
}