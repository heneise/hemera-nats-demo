const hemera = require('../hemeraContext')
const cart = require('../storage/cart')

module.exports.params = {
  topic: 'cart',
  cmd: 'show'
}

module.exports.handler = async function () {
  console.log('cart.show()')
  const entries = cart.getAll()
  const requests = entries.map(item =>
    hemera.act({ topic: 'products', cmd: 'get', id: item.id })
      .then(result => {
        const product = result.data
        return {
          name: product.name,
          price: product.price,
          quantity: item.quantity
        }
      })
  )
  const results = await Promise.all(requests)
  return results
}
