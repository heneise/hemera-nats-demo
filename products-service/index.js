const Hemera = require('nats-hemera')
const nats = require('nats')

const connection = nats.connect({ servers: [process.env.NATS_URI] })
let hemera = new Hemera(connection)
hemera.use(require('hemera-joi'))

const get = require('./handlers/get')

hemera.ready(function () {
  hemera.add(get.params, get.handler)
})
