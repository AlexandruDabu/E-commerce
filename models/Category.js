const {DataTypes} = require('sequelize');
const sequelize = require('../db/config')

const Category = sequelize.define('Category',{
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
        allowNull: true
    }
},{
    tableName: 'category',
    timestamps: false,
})

module.exports = Category;