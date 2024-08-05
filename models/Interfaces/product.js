const Category = require("../Category");
const Product = require("../Products")

const getProducts = async () =>{
    return Product.findAll();
}

const getProductById = async(id) => {
    return Product.findOne({where: {id: id}});
}

const getProductByCategory = async(categoryName) => {
    return Product.findAll({
        include: [{
            model: Category,
            as: 'category',
            attributes: []
        }],
        where:{
            '$category.name$': categoryName
        }
    })
}

const createProduct = async(product) =>{
    return created = Product.create(product);
}

const updateProduct = async(id,updatedProduct) => {
    const product = await Product.findOne({where: {id: id}});
    return product.update(updatedProduct);
}

const deleteProduct = async(id) => {
    const product = await Product.findOne({where: {id: id}});
    return product.destroy();
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory
}