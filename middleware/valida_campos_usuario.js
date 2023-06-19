const valida_campos_usuario = (req, res, next)=>{
    const {nombre, apellido, edad, salario} = req.body
    if(!nombre || !apellido || !edad || !salario)
    return res.status(400).json({message: 'Faltan campos por llenar'})
}
module.exports = valida_campos_usuario

 