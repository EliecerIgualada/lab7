const mongoose = require("mongoose")

const usuarioSchema = mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    salario:Number
})

const UsuarioModel= mongoose.model("usuario",usuarioSchema)
module.exports=UsuarioModel