const users = require('./users.js');
const products = require('./products.js')
const reviews = require('./reviews.js')
const category = require('./category.js')
const cart = require('./cart.js');
const orders = require('./orders.js');
const mountRoutes = (app) => {
    app.use('/users', users)
    app.use('/products', products)
    app.use('/reviews',reviews)
    app.use('/category',category)
    app.use('/cart',cart);
    app.use('/orders',orders);
}

module.exports = mountRoutes;