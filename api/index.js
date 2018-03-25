const fastify = require('fastify')()
const Hemera = require('nats-hemera')
const nats = require('nats')

const connection = nats.connect({ servers: [process.env.NATS_URI] })
let hemera = new Hemera(connection)
hemera.use(require('hemera-joi'))

async function addProductToCart (productId, quantity) {
  return hemera.act({
    topic: 'cart',
    cmd: 'addProduct',
    productId: productId,
    quantity: quantity
  })
}

async function showCart () {
  const cart = await hemera.act({
    topic: 'cart',
    cmd: 'show'
  })

  return cart.data
}

async function clearCart () {
  return hemera.act({
    topic: 'cart',
    cmd: 'clear'
  })
}

// Fastify functions
fastify.get('/', async function (request, reply) {
  const cart = await showCart()
  reply.send(JSON.stringify(cart, null, 2))
})

fastify.post('/cart', async function (request, reply) {
  const productId = request.body.productId
  const quantity = request.body.quantity
  const cart = await addProductToCart(productId, quantity)
  reply.send(cart.data)
})

fastify.delete('/cart', async function (request, reply) {
  await clearCart()
  reply.send()
})

fastify.listen(3000, '0.0.0.0', function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
