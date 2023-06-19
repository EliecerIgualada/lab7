const valida_campos = (req, res, next)=>{
    const {id_producto, descripcion, marca, costo, id, nombre, apellido, edad, salario} = req.body
    if(!id_producto || !descripcion || !marca || !costo || !id || !nombre || !apellido || !edad || !salario)
    return res.status(400).json({message: 'Faltan campos por llenar'})
}
module.exports = valida_campos