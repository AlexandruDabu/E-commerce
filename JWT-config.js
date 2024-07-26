const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

function generateToken(user) {
    return jwt.sign({userId: user.id, role: user.role}, secretKey, {expiresIn: '1h'})
}

function verifyToken(token,callback) {
    jwt.verify(token,secretKey,callback);
}
//Middleware
const authJWT = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(token) {
        verifyToken(token, (err,user) => {
            if(err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    }
    else {
        res.sendStatus(401);
    }
}
module.exports = {
    generateToken,
    verifyToken,
    authJWT
};