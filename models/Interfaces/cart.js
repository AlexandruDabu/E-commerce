const Cart = require("../Cart")

const getById = async(id) => {
    Cart.findOne({where : {user_id: id}});
}

module.exports = getById