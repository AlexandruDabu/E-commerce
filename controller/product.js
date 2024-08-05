const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductByCategory } = require("../models/Interfaces/product");

exports.products = async (req,res) => {
    try{
        const products = await getProducts();
        if(!products){
            res.status(404).json({message: 'No products found'});
            return;
        }
        res.status(200).json({data: products});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.productById = async (req,res) =>{
    try{
        const product = await getProductById(req.params.id);
        if(!product){
            res.status(404).json({message: 'No product found'});
            return;
        }
        res.status(200).json({data: product});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.productByCategoryName = async(req,res) =>{
    try{
        const product = await getProductByCategory(req.params.category);
        if(!product){
            res.status(404).json({message: 'No product found on this category'});
            return;
        }
        res.status(200).json({data: product});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.createProduct = async(req,res) =>{
    try{
        const created = await createProduct(req.body);
        if(!created){
            res.status(404).json({message: 'Couldnt create the product'})
            return;
        }
        res.status(201).json({message: 'Created succesfully'});
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.updateProduct = async(req,res) =>{
    try{
        const updated = await updateProduct(req.params.id,req.body);
        if(!updated){
            res.status(404).json({message: 'Couldnt find the product'})
            return;
        }
        res.status(200).json({message: 'Product Updated succesfully', updated})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteProduct = async(req,res) =>{
    try{
        const deleted = await deleteProduct(req.params.id);
        if(!deleted) {
            res.status(404).json({message: 'Couldnt find the product'})
            return;
        }
        res.status(200).json({message: 'Product deleted succesfully'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}