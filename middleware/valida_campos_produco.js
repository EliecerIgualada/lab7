const valida_campos_producto = (req, res, next)=>{
    const {descripcion, marca, costo, } = req.body
    if(!descripcion || !marca || !costo )
    return res.status(400).json({message: 'Faltan campos por llenar'})
}
module.exports = valida_campos_producto