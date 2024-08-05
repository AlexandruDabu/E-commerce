const { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../models/Interfaces/category")

exports.categories = async (req,res) => {
    try{
        const categories = await getCategories();
        if(!categories){
            res.status(404).json({message: 'There are no categories'});
        }
        else res.status(200).json({data: categories})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.categoryById = async(req,res) =>{
    try{
        const category = await getCategoryById(req.params.id);
        if(!category){
            res.status(404).json({message: 'Not category found'});
        }
        else res.status(200).json({data: category})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.createCategory = async(req,res) =>{
    try{
        const {name,description} = req.body;
        const created = await createCategory(name,description);
        if(!created){
            res.status(400).json({message: 'Error creating the category'});
        }
        else res.status(201).json({message: "Created succesfully"})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.updateCategory = async(req,res) =>{
    try{
        const id = req.params.id;
        const updated = await updateCategory(id,req.body);
        res.status(200).json({message: 'Updated Succesfully', updated})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteCategory = async(req,res) =>{
    try{
        const id = req.params.id;
        const deleted = await deleteCategory(id);
        if(!deleted){
            res.status(404).json({message: 'Category not found'})
        }
        else res.status(200).json({message: 'Category deleted'});
    }catch(err){
        res.status(500).json({error: err.message})
    }
}