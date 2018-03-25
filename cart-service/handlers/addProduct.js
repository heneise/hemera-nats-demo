const Joi = require('joi')
const cart = require('../storage/cart')

module.exports.params = {
  topic: 'cart',
  cmd: 'addProduct',
  productId: Joi.number().integer().min(0).required(),
  quantity: Joi.number().integer().min(0).max(5).required()
}

module.exports.handler = async function (req) {
  console.log(`cart.addProduct(${req.productId}, ${req.quantity})`)

  cart.add(req.productId, req.quantity)
  return true
}
