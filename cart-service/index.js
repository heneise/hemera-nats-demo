const hemera = require('./hemeraContext')

const addProduct = require('./handlers/addProduct')
const show = require('./handlers/show')
const clear = require('./handlers/clear')

hemera.ready(function () {
  hemera.add(addProduct.params, addProduct.handler)
  hemera.add(show.params, show.handler)
  hemera.add(clear.params, clear.handler)
})
