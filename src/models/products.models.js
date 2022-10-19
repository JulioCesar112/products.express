const { Field } = require('pg-protocol/dist/messages')
const {DataTypes} = require ('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {
    
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    registerDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'register_date'
    },
    linkProduct: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'link_product'
    }

})

module.exports = Products