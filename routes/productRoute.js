const express = require('express')
const productRoute = express.Router()
const {getProduct,postProduct,deleteProduct,updateProduct,getProdById} = require('../controllers/productController.js')


productRoute.get('/',getProduct)
productRoute.post('/',postProduct)
productRoute.delete('/:id',deleteProduct)
productRoute.put('/:id',updateProduct)
productRoute.get('/:id',getProdById)



module.exports = productRoute