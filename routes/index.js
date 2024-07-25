const users = require('./users.js');
const products = require('./products.js')
const reviews = require('./reviews.js')
const mountRoutes = (app) => {
    app.use('/users', users)
    app.use('/products', products)
    app.use('/reviews',reviews)
}

module.exports = mountRoutes;