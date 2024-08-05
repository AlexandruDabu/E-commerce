const { generateToken } = require("../JWT-config");
const { getUsers, getUserById, getUserByEmail, createUser } = require("../models/Interfaces/users")

exports.getUsers = async(req,res)=>{
    try{
        const users = await getUsers();
        if(!users){
            res.status(404).json({message: 'There are no users'});
            return;
        }
        res.status(200).json({data: users})
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.getUserById = async(req,res) => {
    try{
        const user = await getUserById(req.params.id);
        if(!user){
            res.status(404).json({message: 'There is no user with such id'});
            return;
        }
        res.status(200).json({data: user});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.login = async(req,res)=>{
    try{
        const user = await getUserByEmail(req.body.email);
        if(!user){
            res.status(404).json({message: 'There is no user with such email'});
            return;
        }
        const isMatch = user.password == req.body.password;
        if(!isMatch){
            res.status(400).json({message: 'Password is wrong'});
            return;
        }
        const token = generateToken(user);
        res.status(200).json({message: 'Logged in succesfully', token})
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
exports.register = async(req,res)=>{
    try{
        const { name, email, password, address, phonenumber} = req.body;

    const existingUser = await getUserByEmail(email)
    if(existingUser){
        return res.status(400).json({message: 'Email already exists'});
    }
    const newUser = await createUser(req.body);
    res.status(201).json({message : `User succesfully created`, user: newUser})}
    catch(err){
        res.status(500).json({error: err.message});
    }
}