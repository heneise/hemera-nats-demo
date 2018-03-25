const Joi = require('joi')

const products = [{
  name: 'Keyboard',
  price: 22.5
}, {
  name: 'Mouse',
  price: 17.2
}, {
  name: 'Display',
  price: 349.9
}]

module.exports.params = {
  topic: 'products',
  cmd: 'get',
  id: Joi.number().integer().min(0).max(2).required()
}

module.exports.handler = async function get (req) {
  console.log(`products.get(${req.id})`)
  return products[req.id]
}
