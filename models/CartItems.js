const {DataTypes} = require('sequelize');
const sequelize = require('../db/config');
const Cart = require('./Cart');

const CartItems = sequelize.define('CartItems',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantitiy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'cartitems',
    timestamps: false
})
Cart.hasMany(CartItems, { foreignKey: 'cart_id', as: 'items' });
CartItems.belongsTo(Cart, { foreignKey: 'cart_id' });
module.exports = CartItems;