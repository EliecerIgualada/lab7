const jwt = require("jsonwebtoken")

const validaToken = (req, res, next)=>{
const token =  req.headers["authorization"].split(" ")[1]
jwt.verify(token, process.env.LOCALKEY, (error, data)=>{
    if (error)
    return res.status(404).json({status:"Token invalido"})
    next()
})
}

module.exports=validaToken