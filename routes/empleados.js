const express = require("express")
const router = express.Router()
const valida_empleado = require("../middleware/valida_empleado")

var{empleados} = require("../models/empleado")
router.use(express.json())

emple.get("/",(req,res)=>{
    return res.status(200).json(empleados)
})
router.get("/:id",(req,res)=>{
    const id=req.params.id
    const filtro = empleados.filter((empleado)=>empleado.id==id)
    if (filtro.length>0){
        return res.json(filtro)
    }else
    return res.status(404).json({status:"NO ENCONTRADO"})
})

router.post("/", valida_empleado, (req,res)=>{
    var body = req.body
    body.id=empleados.length + 1
    empleados.push(body)
    return res.status(201).json(body)
})

router.put("/:id",valida_empleado, (req,res)=>{
    var id = req.params.id
    var body = req.body
    const filtro = empleados.filter((empleado)=>empleado.id==id)
    if (filtro.length > 0){
        empleados = empleados.filter((empleado)=>empleado.id==id)
        empleados.push(body)
        return res.status(201).json(body)
    }else
    return res.status(404).json({status:"No encontrado"})
})

router.delete("/:id",(req,res)=>{
    var id= req.params.id
    const filtro =empleados.filter((empleado)=> empleado.id==id)
    if (filtro.length>0){
        empleados = empleados.filter((empleado)=>empleado.id !=id)
        empleados.push(body)
        return res.status(200).json(filtro)
    }else
    return res.statur(404).json({status:"No encontrado"})
})
module.exports = router