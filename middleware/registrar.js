const registrar = (req,res, next)=>{
    console.log("Se registra la entrada del usuario")
    next()
}
module.exports = registrar