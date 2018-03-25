let cart = []

module.exports = {
  getAll: () => cart,
  add: (id, quantity) => cart.push({ id, quantity }),
  clear: () => { cart = [] }
}
