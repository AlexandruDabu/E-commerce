const {DataTypes} = require('sequelize');
const sequelize = require('../db/config');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    tableName: 'orders',
    timestamps: false
})

module.exports = Order;