const express = require ("express")
const router = express.Router()
var {usuarios} = require("../models/usuario")

const valida_campos_usuario = require("../middleware/valida_campos_usuario")
const MongoConnect=require("../MongoConnect")
const UsuarioModel = require("../models/UsuarioModels")
const validaToken = require("../middleware/validaToken")
MongoConnect()

//9 Middleware
router.use(express.json())

//7
router.get("/", validaToken, async(req, res)=>{
    try{
       const usuarios = await UsuarioModel.find()
       return res.json(usuarios)
    }catch(error){
        return res.status(500).json({status:"Error de Servidor"})
    }
})

//8
router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const usuarios = await UsuarioModel.find(id)
        if(!usuarios)
        return res.status(404).json({status:"NO se encuentra el id"})
        return res.json(usuarios)
         }catch(error){
         return res.status(500).json({status:"Error de Servidor"})
     }
    })

   //9
router.post("/", valida_campos_usuario,async(req,res)=>{
    try{
        const{nombre,apellido,edad,salario}=req.body
        const Usuario = new UsuarioModel({nombre,apellido,edad,salario})
        await Usuario.save()
        return res.json(Usuario)
    }catch(error){
        return res.status(500).json({status:"Error de Servidor"})
    }
})

//10 
router.put("/:id",async(req,res)=>{
     try{
        const {id}=req.params
        const {nombre,apellido,edad,salario}=req.body
        const usuarios = await UsuarioModel.findByIdAndUpdate(id, {nombre,apellido,edad,salario}, {new:true})

        if(!usuarios)
            return res.status(404).json({status:"NO se encuentra el id"})
            return res.json(usuarios)

    }catch(error){
         return res.status(500).json({status:"Error de Servidor"})
     }
    })

//11
router.delete("/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const usuarios = await UsuarioModel.findByIdAndDelete(id)
        if(!usuarios)
            return res.status(404).json({status:"NO se encuentra el id"})
            return res.json(usuarios)
         }catch(error){
         return res.status(500).json({status:"Error de Servidor"})
     }
})
module.exports = router




