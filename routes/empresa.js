const express = require ("express")
const router = express.Router()
const MongoConnect = require("../MongoConnect")
const EmpresaModel=require("../models/empresaModel")
const jwt = require ("jsonwebtoken")

MongoConnect()


router.post("/create", async (req,res)=>{
    try{
        const {nombre, llave} = req.body
        const empresa = new EmpresaModel({nombre, llave});
       await empresa.save()
        return res.json(empresa)
     }catch(error){
        console.log(error)
         return res.status(500).json({status:"Error de Servidor"})
     }
})

router.post("/validate", async (req,res)=>{
    try{
        const {llave} = req.body
        const empresa =  await EmpresaModel.find({llave})
        if (empresa.length ==0)
        return res.status(404).json({status:"Llave no encontrada"})

        jwt.sign({empresa}, process.env.LOCALKEY, {expiresIn:"20s"}, (error, token)=>{
            if (error)
            return res.status(500).json({status:"Token no generado"})
            return res.json(token)
        })

     }catch(error){
         return res.status(500).json({status:"Error de Servidor"})
     }
})


module.exports=router