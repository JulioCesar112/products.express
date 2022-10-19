const router = require('express').Router()
const { application } = require('express')
const productsServices = require('./products.services')


router.get('/', productsServices.getAllProducts)
router.get ('/:id', productsServices.getProductById)
router.post('/', productsServices.createProduct) 
router.patch('/:id', productsServices.patchProduct)
router.delete('/:id', productsServices.deleteProduct) //? /movies

module.exports = router