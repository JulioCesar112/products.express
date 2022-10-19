const { response } = require('express');
const { where } = require('sequelize');
const uuid = require('uuid');


const Products = require('../models/products.models')



const getAllTotalsProducts = async () => {

  const data = await Products.findAll() // get all products existens

  return data
};


const countTotalProducts = async () => {
  const data = await Products.findAll() // get all products existens
  return data.length
}
countTotalProducts()
  .then()
  .catch(err => console.log(err))


const getProductId = async (id) => {
  const data = await Products.findOne({
    where: {
      id: id
    },
  });
  return data
};


const createNewProduct = async (data) => {

  const uuidGenerate = uuid.v4()

  const newProduct = await Products.create({

    id: uuidGenerate,
    name: data.name,
    price: data.price,
    category: data.category,
    isAvailable: data.isAvailable,
    registerDate: data.registerDate,
    linkProduct: `http://127.0.0.1:9000/products/${uuidGenerate}`
  });
  return newProduct
};

const editProductId =  async (id, data) => {
  const response  = await Products.update (data, {
    where: {
      id: id
    }
  });
  return response
};

const deleteProductId = async (id) => {
  const data = await Products.destroy({
    where: {
      id: id
    }
  });
  return data
};

module.exports = {
  getAllTotalsProducts,
  getProductId,
  createNewProduct,
  editProductId,
  deleteProductId,
  countTotalProducts
}