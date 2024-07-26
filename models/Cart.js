const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Cart = sequelize.define('Cart',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'shoppingcart',
    timestamps: false
})

module.exports = Cart;