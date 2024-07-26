const { DataTypes } = require('sequelize');
const sequelize = require('../db/config')

const OrderDetails = sequelize.define('OrderDetails',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'orders_details',
    timestamps: false
})
module.exports = OrderDetails;