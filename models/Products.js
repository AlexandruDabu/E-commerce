const { DataTypes } = require('sequelize')
const sequelize = require('../db/config')

const Product = sequelize.define('Product',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_url:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    tableName: 'products',
    timestamps: false,
})

module.exports = Product;