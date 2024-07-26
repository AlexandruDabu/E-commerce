function authorize(requiredRole) {
    return (req,res,next) =>  {
        console.log(req.user);
        if(!req.user){
            return res.sendStatus(401);
        }
        if(req.user.role !== requiredRole){
            return res.sendStatus(403);
        }
        next();
    }
}
module.exports = authorize;