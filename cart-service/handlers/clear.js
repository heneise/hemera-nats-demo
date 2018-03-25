const cart = require('../storage/cart')

module.exports.params = {
  topic: 'cart',
  cmd: 'clear'
}

module.exports.handler = async function clear() {
  console.log('cart.clear()')
  cart.clear()
  return true
}
