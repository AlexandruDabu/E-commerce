const Category = require("../Category")

const getCategories = async () => {
    return Category.findAll();
}

const getCategoryById = (id) =>{
    return Category.findOne({where: {id: id}})
}

const createCategory = (name,description) => {
    return Category.create({
        name: name,
        description: description
    })
    
}

const deleteCategory = async (id) => {
    const category = await Category.findOne({where: {id: id}});
    if(category){
        await category.destroy();
            return true;
    }
    return false;
}

const updateCategory = async (id, updatedData) => {
    const category = await Category.findOne({where: {id: id}});
    if(category){
        await category.update(updatedData);
        return category
    } else {
        return false;
    }
}

module.exports ={
    getCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategory
}