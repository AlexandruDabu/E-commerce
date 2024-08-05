const User = require("../User")

const getUsers = async() =>{
    return User.findAll();
}

const getUserById = async(id) =>{
    return User.findOne({where: {id: id}});
}

const getUserByEmail = async(email) => {
    return User.findOne({where: {email: email}})
}

const createUser = async(data) =>{
    data.role = 'customer';
    return User.create(data);
}

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser
}