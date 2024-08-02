/**
 * Calculates total price of a new order
 * @param {Array} products cartProducts: objects array
 * @returns {number} Total Price
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

/*
export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum += product.price)
  return sum
  }
*/